import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardiaGuard implements CanActivate {
 
constructor(private AFauth: AngularFireAuth, private router: Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{
      return this.AFauth.authState.pipe(map(auth=>{
        if(isNullOrUndefined(auth)){

          this.router.navigate(['/login'])
        
          return false;
        }else{
          let currentUser = JSON.parse(localStorage.getItem("currentUser"));
          console.log("el current! ", currentUser["rol"]);
          if(currentUser["rol"] == "guardia"){
            return true;
          }else{
            this.router.navigate(['/guardia'])
            return false;
          }
          
        }
      }))
      
    }
}
