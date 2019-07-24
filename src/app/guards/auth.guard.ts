import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouteReuseStrategy } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth, database } from 'firebase';
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  public userTmp: any;
  public estado: boolean = true;
  constructor  (private AFauth: AngularFireAuth, private router: Router, private datBase: AngularFirestore){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{
      return this.AFauth.authState.pipe(map(auth=>{
        if(isNullOrUndefined(auth)){

          this.router.navigate(['/login'])
        
          return false;
        }else{
          
          return true;
        }
      }))
      
    }
   
  
}
