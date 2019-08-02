import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { from } from 'rxjs';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';

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
  constructor(private dataBase: AngularFirestore, private auth: AngularFireAuth, private modal: ModalController, private alert: AlertController, private navParam: NavParams) { 
    
  }

  ngOnInit() {
    this.listaInvitados = this.navParam.get('listaInvitados');
    console.log(this.listaInvitados.length);
    //console.log(this.addInvitado);
    for (let i = 0; i < this.listaInvitados.length; i++) {
      //console.log(this.listaInvitados[i].name)
    }
    
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
    this.keepGoing = true;
    if(this.visitanteIngresado != ""){
    /*
    
      this.usuarios = this.dataBase.collection('users').snapshotChanges().pipe(map(user => {
        user.map(dato => {
          console.log("===>",dato.payload.doc.data()['name']);
          if(this.visitanteIngresado == dato.payload.doc.data()['name']){
            if(dato.payload.doc.data()['rol'] == "visitante"){
              this.usuarioEncontrado = true;
              this.dataBase.collection('invitados').add({
                id_usuarioResidente: this.auth.auth.currentUser.uid,
                id_usuarioVisitante: dato.payload.doc.data()['uid'],
                fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                estado: false
                
              });
              this.closeChat();
            }
          }
        });
      }));
        */
        //console.log("===>");
        
        

        this.usuarios = this.dataBase.collection('users').valueChanges();
        this.usuarios.forEach(user => {
          //console.log(user); 
          user.forEach(res => {
            
            //console.log(res);
              if(this.visitanteIngresado == res["username"]){
                if(res['rol'] == 'visitante'){


                  if(this.listaInvitados.length > 0){

                  console.log(this.listaInvitados[0].username)

                  for (let i = 0; i < this.listaInvitados.length; i++) {

                      if(this.listaInvitados[i].username == this.visitanteIngresado){
                        this.usuarioYaExiste = true;
                        console.log("El usuario ya existe");
                        this.presentAlert3();
                        break;
                      }else{
                        this.usuarioYaExiste = false;
                          
                        
                      }
                    
                    
                  }
                  console.log(this.usuarioYaExiste);
                  if(this.usuarioYaExiste == false){
                    this.dataBase.collection('invitados').add({
                      id_usuarioResidente: this.auth.auth.currentUser.uid,
                      id_usuarioVisitante: res['uid'],
                      fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                      fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                      estado: false
                      
                    });
                    
                  }
                  /*
                  this.listaInvitados.forEach(usauriosInvitadoAgregado =>{
                    
                    if(usauriosInvitadoAgregado.name != this.visitanteIngresado){
                      this.dataBase.collection('invitados').add({
                        id_usuarioResidente: this.auth.auth.currentUser.uid,
                        id_usuarioVisitante: res['uid'],
                        fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                        fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                        estado: false
                        
                      });
                      this.closeChat();

                    }else{
                        
                      }
                      })


                      */

                  }else{
                    this.dataBase.collection('invitados').add({
                      id_usuarioResidente: this.auth.auth.currentUser.uid,
                      id_usuarioVisitante: res['uid'],
                      fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                      fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                      estado: false
                      
                    });

                  }
                  this.keepGoing = false;
                  this.usuarioEncontrado = true;
                  //this.closeChat();
                  
                  //alert("Usuario ingresado con exito")
              } 
              }
          })
      });
      
      
      
    }else{
      this.presentAlert2();
    }
    
  }

  closeChat(){
    this.modal.dismiss();
    
  }

}
