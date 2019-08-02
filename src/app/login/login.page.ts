import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service'
import { from } from 'rxjs';
import { auth } from 'firebase';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  usuarioEnSesion: any;

  constructor(private auth: AuthService, public router: Router, private db: AngularFirestore) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    console.log("estas en la funcion de loggeo");
    this.auth.login(this.email, this.password).then(res=>{
        this.usuarioEnSesion = this.db.collection('users').doc(res['user'].uid).valueChanges();
        
        this.usuarioEnSesion.forEach(data => {
          console.log(data)
          console.log(data['rol']);
          if(data['rol'] == "residente"){
            this.router.navigate(['tabs/home']);
          }else if (data['rol'] == "visitante") {
            this.router.navigate(['tutorial']);
          } else {
            this.router.navigate(['tabs/home/listaguardia']);
          }
        }); 
       
       
    });
  }

}
