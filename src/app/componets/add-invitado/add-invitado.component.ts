import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { from } from 'rxjs';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InvitadoServiceService } from '../../servicios/InvitadoServiceService';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Invitado } from '../../models/invitado';


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
  public invitados : any = []
  public users: any = [];
  public objetoInvitado: Invitado;
  public usuariosInvitadosAgregados: any = [];
  constructor(private dataBase: AngularFirestore, private auth: AngularFireAuth, private modal: ModalController, private alert: AlertController, private navParam: NavParams, private servicioInvitado: InvitadoServiceService, private servicioUsuarios: UsuariosService) { 
  
  }

  ngOnInit() {
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
    //console.log("===>", this.usuariosInvitadosAgregados.length);
    //console.log("===>", this.invitados.length);

    if(this.visitanteIngresado != ""){

      this.servicioInvitado.getInvitadoByIdResidente(this.auth.auth.currentUser.uid).subscribe(res => {
        //console.log(res)
          if(res.length >0){
            res.forEach(data => {
              //console.log(data)
              if(data.username == this.visitanteIngresado && data.invitacion_activa == false){
                console.log('se va a cambiar el estado');
              }else if(data.username == this.visitanteIngresado && data.invitacion_activa == true){
                console.log('el usuario ya esta invitado')  
              }else{
                console.log('se va agregar el usuario');
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
                id_residente : this.auth.auth.currentUser.uid,
                name : res[0][0].name,
                lastname: res[0][0],
                username : res[0][0].username
                }
                console.log('se va a guardar de una');
                this.servicioInvitado.addInvitado(invitadoTmp);
              }else{
                console.log('no existe ese invitado');
              }
            })
            
          }
      })

        this.servicioUsuarios.getuserInvitadoByUsername(this.visitanteIngresado).subscribe(res => {
          
        });

        
        ////*******METODO QUE FUNCIONA ACTUALMENTE******///

        //console.log("===>");
        /*
        for (let i = 0; i < this.usuariosInvitadosAgregados.length; i++) {
          
          //console.log("===>", this.usuariosInvitadosAgregados[i])
         
          if(this.visitanteIngresado == this.usuariosInvitadosAgregados[i].username){
            
              this.servicioInvitado.getInvitadoById(this.invitados[i].id).subscribe(res => {
                if(res.invitacion_activa == true){
                  console.log('el usuario ya esta invitado')
                  
                }else{
                  this.servicioInvitado.updateEstoInvitado(this.invitados[i].id);
                }
                //console.log("******>", res);
              })
              this.usuarioYaExiste = true;
              break;
          }else{
            
            this.usuarioYaExiste = false;
          }
          
          
        }
        */


        /*
        if(!this.usuarioYaExiste){
          var idVisitanteIngresado: string;
          var invitadoTmp: Invitado;
          this.servicioUsuarios.getuserByUsername(this.visitanteIngresado).subscribe(res => {
            res.forEach(user => {
              idVisitanteIngresado = user.uid;
              console.log(idVisitanteIngresado);
                invitadoTmp = {
                estado: false,
                invitacion_activa: true,
                fecha_ingreso: null,
                fecha_salida:null,
                id_usuarioResidente: this.auth.auth.currentUser.uid,
                id_usuarioVisitante: idVisitanteIngresado,
                
              }
            });
            this.servicioInvitado.addInvitado(invitadoTmp);
            
          })

          
          //
        }
        */


        

        /*
        for (let i = 0; i < this.users.length; i++) {
          if(this.visitanteIngresado == this.users[i].username && this.users[i].rol == 'visitante'){

            var idVisitanteIngresado = this.users[i].uid;

            //debugger
            if(this.listaInvitados.length > 0){
            for (let j = 0; j < this.listaInvitados.length; j++) {
                  
                  if(idVisitanteIngresado == this.listaInvitados[j].uid){
                    existeUsuario = true;
                    
                    break;
                  }else{
                    this.objetoInvitado = {
                      estado: false,
                      invitacion_activa: true,
                      fecha_ingreso: null,
                      fecha_salida: null,
                      id_usuarioResidente: this.auth.auth.currentUser.uid,
                      id_usuarioVisitante: idVisitanteIngresado
                    }
                    
                  }
     
              }
            }else{
              this.objetoInvitado = {
                estado: false,
                invitacion_activa: true,
                fecha_ingreso: null,
                fecha_salida: null,
                id_usuarioResidente: this.auth.auth.currentUser.uid,
                id_usuarioVisitante: idVisitanteIngresado
              }
              
            }
            
            if(existeUsuario){
              console.log('el usuario ya esta invitado');
              alert('El usuario que ingreso ya esta invitado');
              this.visitanteIngresado = "";
              break;
              
            }else{
              console.log('No esta invitado aun');
              console.log(this.objetoInvitado);
              this.servicioInvitado.addInvitado(this.objetoInvitado);
              
            }
          }
          
        }
        */


      
    }else{
      this.presentAlert2();
    }
    
  }

  closeChat(){
    this.modal.dismiss();
    
  }

}
