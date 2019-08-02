import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { from } from 'rxjs';
import{ Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private AFauth: AngularFireAuth, private router: Router,
              private dataBase: AngularFirestore ) { }
    login(email: string, password: string){
      
      return new Promise((resolve, reject) =>{
        this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
          resolve(user);
        }).catch(err=>reject(err));
      });
      
    

  }

  logOut(){
    this.AFauth.auth.signOut().then(()=> {
      this.router.navigate(['/login']);
    });
  }

  register(email:string, password: string, name: string, rol: string, username: string){
    
    return new Promise((resolve, reject) => {
      
      /*
      var usuarios = this.dataBase.collection("users").valueChanges();
      usuarios.forEach(user => {
        debugger
        for (let i = 0; i < user.length; i++) {
          console.log(user[i]['username'])
          if(user[i]['username'] == username){

          usuarioExiste = true;
          break;
          }else{
            usuarioExiste = false
          }
        }

        
      });
      */
      
      
      
      

      
      


      
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
        }).catch(err => reject(err));


      //}
              //romperusuario = true;
          
        
      


      
    })
    
  }


}
