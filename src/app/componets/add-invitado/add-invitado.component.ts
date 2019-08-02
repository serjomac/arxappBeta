import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { from } from 'rxjs';
import { ModalController, AlertController } from '@ionic/angular';
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
  constructor(private dataBase: AngularFirestore, private auth: AngularFireAuth, private modal: ModalController, private alert: AlertController) { }

  ngOnInit() {}

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
        console.log("===>");
        
        this.usuarios = this.dataBase.collection('users').valueChanges();
        this.usuarios.forEach(user => {
          //console.log(user);
          user.forEach(res => {
            
            if(this.keepGoing){
            //console.log(res);
              if(this.visitanteIngresado == res["name"]){
                if(res['rol'] == 'visitante'){
                  this.dataBase.collection('invitados').add({
                    id_usuarioResidente: this.auth.auth.currentUser.uid,
                    id_usuarioVisitante: res['uid'],
                    fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                    fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                    estado: false
                    
                  });
                  this.keepGoing = false;
                  this.usuarioEncontrado = true;
                  this.closeChat();
                  
                }
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
