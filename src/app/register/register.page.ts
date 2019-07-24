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
  constructor(public auth: AuthService, public router: Router, public dataBase: AngularFirestore) { }

  ngOnInit() {
    console.log(this.seleccion);
  }

  onSubmitRegister(){
    
    if(this.rolSeleccionado == ''){
      alert('Debe seleccionar un tipo de usuario');
    }else{
      this.auth.register(this.email, this.password, this.name, this.rolSeleccionado).then( auth => {
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
  }

  selectValue = function(mySelect) {
    this.rolSeleccionado = mySelect;
    console.log(mySelect);
}
}
