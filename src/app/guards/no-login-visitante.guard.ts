import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth, database } from 'firebase';
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class NoLoginVisitanteGuard implements CanActivate {
  constructor(private AFauth: AngularFireAuth, private router: Router, private servicioUsuario: UsuariosService){

  }
  canActivate(){
      
      return this.AFauth.authState.pipe(map(auth=>{
        if(isNullOrUndefined(auth)){

          this.router.navigate(['/login'])
        
          return false;
        }else{
          let currentUser = JSON.parse(localStorage.getItem("currentUser"));
          if(currentUser['rol'] == "visitante"){
            console.log(currentUser);
            return true;
          }else{
            this.router.navigate(['/login'])
            return false
          }
          
        }
      }))
      
    }
  
}
