import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth, database } from 'firebase';
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements  CanActivate{
  constructor  (private AFauth: AngularFireAuth, private router: Router, private dataBase: AngularFirestore){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{
      return this.AFauth.authState.pipe(map(auth=>{
        if(isNullOrUndefined(auth)){
          return true;
        }else{

          
          this.router.navigate(['/tabs/home']);
          return false;
        }
      }))
      
    }
  
}
