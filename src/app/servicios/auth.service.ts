import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { from } from 'rxjs';
import{ Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private AFauth: AngularFireAuth, private router: Router,
              private dataBase: AngularFirestore, private alert: AlertController ) { }
    login(email: string, password: string){
      
      return new Promise((resolve, reject) =>{
        this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
          resolve(user);
        }).catch(err=>{
          this.alertLoginErrorAuth(err)
        });
      });
      
    

  }

  async alertLoginErrorAuth(error: string) {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Ocurrio un error al inicia sesión',
      message: error,
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
        }
      }]
    });

    await alert.present();
  }

  async alertRegisterErrorAuth(error: string) {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Ocurrio un error en el registro',
      message: error,
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
        }
      }]
    });

    await alert.present();
  }

  logOut(){
    this.AFauth.auth.signOut().then(()=> {
      this.router.navigate(['/login']);
    });
  }

  register(email:string, password: string, name: string, rol: string, username: string){
    
    return new Promise((resolve, reject) => {
      
      
        this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res=>{


          localStorage.setItem('userUid', res.user.uid);
            this.dataBase.collection('directions').add({
                id_usuario: res.user.uid,
                manzana: '',
                villa: '',
                referencia: ''
          });
            this.AFauth.auth.currentUser.updateProfile({
                displayName: name,
                photoURL: ''
          }).then(()=>{
            this.dataBase.collection('users').doc(res.user.uid).set({
                cedula: '',
                name: name,
                lastName: '',
                rol: rol,
                telefono: '',
                uid: res.user.uid,
                id_direccion: '',
                username: username,
                estado: false,
            })
          })
          
          resolve(res)
        }).catch(err => {
          this.alertRegisterErrorAuth(err)
        });


      //}
              //romperusuario = true;
          
        
      


      
    })
    
  }


}
