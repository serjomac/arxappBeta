import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public seleccion: string;
  public name: string;
  public email: string;
  public password: string;
  public rolSeleccionado: string;
  public usuarioEnSesion: any;
  public username: string;
  public usurioExiste: boolean=false
  constructor(public auth: AuthService, public router: Router, public dataBase: AngularFirestore) { }

  ngOnInit() {
    console.log(this.seleccion);
  }

  onSubmitRegister(){
    
    if(this.rolSeleccionado == ''){
      alert('Debe seleccionar un tipo de usuario');
    }else{
      //debugger
      
      var users = this.dataBase.collection('users').valueChanges();

      users.forEach(user => {
       
       
        for (let i = 0; i < user.length; i++) {
          if(this.username == user[i]['username']){
            this.usurioExiste = true;
            break;
          }else{
            this.usurioExiste = false
          }
          
        }
        console.log(this.usurioExiste)
        if(!this.usurioExiste){
       
          this.auth.register(this.email, this.password, this.name, this.rolSeleccionado, this.username).then( auth => {
            this.usuarioEnSesion = this.dataBase.collection('users').doc(auth['user'].uid).valueChanges();
            this.usuarioEnSesion.forEach(data => {
              console.log(data['rol']);
              if(data['rol'] == "residente"){
                this.router.navigate(['tabs/home']);
              }else if (data['rol'] == "visitante"){
                this.router.navigate(['tutorial']);
              }
            }); 
            //this.router.navigate(['tabs/home'])
          }).catch(err => console.log(err))
        }
      });

     // console.log(this.usurioExiste)

      

      
    }
  }



  existeUsuario = function(username){

    var users = this.dataBase.collection('users').valueChanges();
    var retorno: boolean = false;
    users.forEach(user => {
      //debugger
      for (let i = 0; i < user.length; i++) {
        if(username == user[i]['username']){
          retorno = true;
          break;
        }else{
          retorno = false;
        }
      }
    });

    return retorno;
  }


  selectValue = function(mySelect) {
    this.rolSeleccionado = mySelect;
    console.log(mySelect);
}
}
