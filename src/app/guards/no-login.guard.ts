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
export class NoLoginGuard implements  CanActivate{
  constructor  (private AFauth: AngularFireAuth, private router: Router, private dataBase: AngularFirestore, private servicioUsuario: UsuariosService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{
      return this.AFauth.authState.pipe(map(auth=>{
        if(isNullOrUndefined(auth)){
          return true;
        }else{
         
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if(currentUser['rol'] == "residente"){
              console.log("===============>>>>>>>>>",currentUser['rol']);
              this.router.navigate(['']);
              return false;
            }else if(currentUser['rol'] == "visitante"){
              this.router.navigate(['/tutorial']);
              return false;
            }else {
              this.router.navigate(['/guardia']);
              return false
            }
            
          
          
        }
      }))
      
    }
  
}
