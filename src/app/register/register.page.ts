import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public seleccion: string = "";
  public name: string = "";
  public email: string = "";
  public password: string = "";
  public rolSeleccionado: string = "";
  public usuarioEnSesion: any;
  public username: string;
  public usurioExiste: boolean=false
  constructor(public auth: AuthService, public router: Router, public dataBase: AngularFirestore, private alert: AlertController) { }

  ngOnInit() {
    console.log(this.seleccion);
  }

  onSubmitRegister(){
    
    
      if(this.email != "" && this.password != "" && this.rolSeleccionado != "" && this.username != ""){
       
        console.log(this.usurioExiste)
        if(!this.usurioExiste){
          
          this.auth.register(this.email, this.password, this.name, this.rolSeleccionado, this.username).then( auth => {
           
            if(this.rolSeleccionado == "residente"){
              this.router.navigate(['tabs/home']);
            }else if(this.rolSeleccionado == "visitante"){
              this.router.navigate(["/tutorial"])
            }else {
              this.router.navigate(["/guardia"])
            }
          
           
            //this.router.navigate(['tabs/home'])
          }).catch(err => console.log(err))
        }
        
      

     // console.log(this.usurioExiste)

      

      
    }else{
      this.alertCamposImcompletos();
    }
  }

  async alertCamposImcompletos() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Ocurrio un error en el registro',
      message: "Debe llenar todos los campos", 
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
        }
      }]
    });

    await alert.present();
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
