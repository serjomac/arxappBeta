import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { from, UnsubscriptionError } from 'rxjs';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InvitadoServiceService } from '../../servicios/InvitadoServiceService';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Invitado } from '../../models/invitado';
import { Socket } from 'ngx-socket-io';
import { Notificacion } from '../../models/notificacion';
//import { ServicioNotificacionService } from '../../servicios/servicios-notificaciones/servicio-notificacion.service';


@Component({
  selector: 'app-add-invitado',
  templateUrl: './add-invitado.component.html',
  styleUrls: ['./add-invitado.component.scss'],
})
export class AddInvitadoComponent implements OnInit {
  public visitanteIngresado: string = '';
  public usuarioEncontrado: boolean = false;
  public usuarios: any;
  public keepGoing: boolean = true;
  public listaInvitados: any[];
  public usuarioYaExiste: boolean = false;
  public usuarioYaEstaInvitado: boolean = false;
  public invitados : any = []
  public users: any = [];
  public objetoInvitado: Invitado;
  public usuariosInvitadosAgregados: any = [];
  constructor(private dataBase: AngularFirestore, private auth: AngularFireAuth, private modal: ModalController, private alert: AlertController, private navParam: NavParams, private servicioInvitado: InvitadoServiceService, private servicioUsuarios: UsuariosService,public socketIO : Socket) { 
  
  }

  ngOnInit() {
    this.socketIO.connect();
    this.listaInvitados = this.navParam.get('listaInvitados');
    //console.log(this.listaInvitados.length);
    //console.log(this.addInvitado);
    for (let i = 0; i < this.listaInvitados.length; i++) {
      //console.log(this.listaInvitados[i].name)
      //console.log(this.listaInvitados[i].uid)
    } 

    this.servicioInvitado.getInvitados().subscribe(res =>{
      //this.invitados = res;
      
      //console.log(this.invitados);
      
    })
    
    
    this.servicioUsuarios.getAllUsers().subscribe(res => {
      this.users = res;
    })

    
    this.servicioInvitado.getInvitadoByIdResidente(this.auth.auth.currentUser.uid).subscribe(invitados => {
      this.usuariosInvitadosAgregados = [];
      this.invitados = invitados;
      //console.log(this.invitados);

      for (let i = 0; i < this.invitados.length; i++) {
        console.log(this.invitados[i].id);
        this.servicioUsuarios.getUsersRolInvitado(this.invitados[i].id_usuarioVisitante).subscribe(res => {
          res.forEach(data => {
            
            this.usuariosInvitadosAgregados.push(data);
            //console.log(this.usuariosInvitadosAgregados)
          });
          
          
        })
         
      }   


    });
    
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Usuario no valido',
      message: 'El usuario ingresado no existe',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.visitanteIngresado = '';
        }
      }]
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Campo vacio',
      message: 'Debe ingresar un usuario',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.visitanteIngresado = '';
        }
      }]
    });

    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Usuario Repetido',
      message: 'El usuario ya esta en lista',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.visitanteIngresado = '';
        }
      }]
    });

    await alert.present();
  }

  addInvitado(){


    var arrayInvitadosTemporal: any =[];
    var existeUsuario: boolean = false;
    //console.log('===>',this.invitados.length);
    //console.log('===>',this.users.length);
    this.keepGoing = true;
    

  //=================================================================================//
  let existeInvitado: boolean = false;
  let existeinvitadoPeroNoEstaEnLista: boolean = false;
  let invitadoTmp: Invitado

  if(this.visitanteIngresado != ""){

  let lecturaDeInvitados = this.servicioInvitado.getInvitados().subscribe(res => {
    console.log(res);
    //debugger
    
    for (let i = 0; i < res.length; i++) {
      if(res[i].username == this.visitanteIngresado && res[i].invitacion_activa == true){
        existeInvitado = true;
        
        break;
      }else if(res[i].username == this.visitanteIngresado && res[i].invitacion_activa == false){
        existeinvitadoPeroNoEstaEnLista = true;
        invitadoTmp = res[i];
        break;
      }
        else if(res[i].username != this.visitanteIngresado){
          existeInvitado = false;
        }

    }

    if(existeInvitado){
      console.log("el invistado ya esta en lista");
      this.presentAlert3()
      lecturaDeInvitados.unsubscribe();
    }else if(existeinvitadoPeroNoEstaEnLista){
      console.log("se va a actualizar el estado del invitado: ", invitadoTmp);
      this.servicioInvitado.updateEstoInvitado(invitadoTmp.id, true, this.auth.auth.currentUser.uid);
      this.visitanteIngresado = "";
      lecturaDeInvitados.unsubscribe();
    }else{
      
      let leerUsuarioInvitado = this.servicioUsuarios.getuserInvitadoByUsername(this.visitanteIngresado).subscribe(res => {
        console.log("se agregara un invitado a su lista: ", res);
        if(res.length > 0){
          let invitadoNuevo: Invitado = {
            estado : false,
            invitacion_activa : true,
            fecha_ingreso : null,
            fecha_salida:null,
            id_usuarioResidente : this.auth.auth.currentUser.uid,
            name : res[0]["name"],
            lastName: res[0]["lastName"],
            username : res[0]["username"]
          }
          this.servicioInvitado.addInvitado(invitadoNuevo);
          this.visitanteIngresado = "";
          leerUsuarioInvitado.unsubscribe()
          lecturaDeInvitados.unsubscribe()
        }else{
          this.presentAlert();
          this.visitanteIngresado = "";
          leerUsuarioInvitado.unsubscribe()
          lecturaDeInvitados.unsubscribe();
        
        }
      })
    }
  })
  }else{
    this.presentAlert2();
  }
  





  //=================================================================================//

    

                                ////*******METODO QUE FUNCIONA ACTUALMENTE******///

  /*
    this.servicioUsuarios.getuserInvitadoByUsername(this.visitanteIngresado).subscribe( (users: any) => {
      if(users.length > 0){
      if(!users[0]['mensaje']){ 
        
        console.log(this.auth.auth.currentUser.uid);
        let a = this.servicioInvitado.getInvitados().subscribe((res) => {
          //console.log(res)
            if(res){
              
            if(res.length >0){
              res.forEach(data => {
                debugger
                console.log("Invitados" + data.invitacion_activa)
                //console.log(data)
                if(data.username == this.visitanteIngresado && data.invitacion_activa == false){
                  console.log('se va a cambiar el estado del invitado: ', data.id);
                  this.servicioInvitado.updateEstoInvitado(data.id, true);
                  this.visitanteIngresado = "";

                  
                  let notificacion: Notificacion = {
                    estado : true,
                    invitacion_activa : true,
                    fecha_ingreso : new Date(),
                    fecha_salida: new Date(),
                    id_residente : this.auth.auth.currentUser.uid,
                    id_visitante: users[0].uid,
                    name : data.name,
                    lastname: data.lastName,
                    username : data.username
                  }
                  this.socketIO.emit("enviarNotificacion", notificacion);

                  a.unsubscribe();
                }else if(data.username == this.visitanteIngresado && data.invitacion_activa == true){
                  console.log('el usuario ya esta invitado');  
                }else {        
                  console.log('se va agregar el usuario');
                  let invitadoTmp: Invitado = {
                    estado : false,
                    invitacion_activa : true,
                    fecha_ingreso : null,
                    fecha_salida:null,
                    id_usuarioResidente : this.auth.auth.currentUser.uid,
                    name : users[0].name,
                    lastName: users[0].lastName,
                    username : users[0].username
                  };

                  let notificacion: Notificacion = {
                    estado : true,
                    invitacion_activa : true,
                    fecha_ingreso : new Date(),
                    fecha_salida: new Date(),
                    id_residente : this.auth.auth.currentUser.uid,
                    id_visitante: invitadoTmp.id,
                    name : invitadoTmp.name,
                    lastname: invitadoTmp.lastName,
                    username : invitadoTmp.username
                  }

                  //debugger
                  this.servicioInvitado.addInvitado(invitadoTmp);
                  this.socketIO.emit("enviarNotificacion", notificacion);
                  //this.serviceNotificion.registrarNotificacionInvitado(invitadoTmp).subscribe( res => {
                    //console.log(res)
                  //});
                  a.unsubscribe();
                }
              });
            }else{
              this.servicioUsuarios.getuserInvitadoByUsername(this.visitanteIngresado).subscribe(res=>{
                if(res){
                  
                  let invitadoTmp: Invitado ={
                  estado : false,
                  invitacion_activa : true,
                  fecha_ingreso : null,
                  fecha_salida:null,
                  id_usuarioResidente : this.auth.auth.currentUser.uid,
                  name : users[0].name,
                  lastName: users[0].lastName,
                  username : users[0].username
                  }
                  console.log('se va a guardar de una');


                  let notificacion: Notificacion = {
                    estado : true,
                    invitacion_activa : true,
                    fecha_ingreso : new Date(),
                    fecha_salida: new Date(),
                    id_residente : this.auth.auth.currentUser.uid,
                    id_visitante: invitadoTmp.id,
                    name : invitadoTmp.name,
                    lastname: invitadoTmp.lastName,
                    username : invitadoTmp.username
                  }


                  this.servicioInvitado.addInvitado(invitadoTmp);
                  this.socketIO.emit("enviarNotificacion", notificacion);
                  a.unsubscribe();
                  
                }else{
                  console.log('no existe ese invitado');
                }
              })
              
            }
          }else { 
            console.log("el usuario no tiene visitantes");
          }
        },
        (err)=>{
          console.log("el ", err);

        });
      }else {
        console.log("el usuario ingresao no es visitante");
      }
    }else{
      console.log("el usuario no existe")
    }
    },
    (err)=>{
      console.log("No esta registrdo el invitado", err)
    })

*/


    
  }



  closeChat(){
    this.modal.dismiss();
    
  }

  sendNotificacion(notificacion: Notificacion){
    this.socketIO.emit("enviarNotificacion", notificacion)
  }

}
