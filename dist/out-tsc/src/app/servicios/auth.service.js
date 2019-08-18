import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
var AuthService = /** @class */ (function () {
    function AuthService(AFauth, router, dataBase) {
        this.AFauth = AFauth;
        this.router = router;
        this.dataBase = dataBase;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.AFauth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logOut = function () {
        var _this = this;
        this.AFauth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.register = function (email, password, name, rol, username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
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
            _this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
                localStorage.setItem('userUid', res.user.uid);
                _this.dataBase.collection('directions').add({
                    id_usuario: res.user.uid,
                    manzana: '',
                    villa: '',
                    referencia: ''
                });
                _this.AFauth.auth.currentUser.updateProfile({
                    displayName: name,
                    photoURL: ''
                }).then(function () {
                    _this.dataBase.collection('users').doc(res.user.uid).set({
                        cedula: '',
                        name: name,
                        lastName: '',
                        rol: rol,
                        telefono: '',
                        uid: res.user.uid,
                        id_direccion: '',
                        username: username,
                        estado: false,
                    });
                });
                resolve(res);
            }).catch(function (err) { return reject(err); });
            //}
            //romperusuario = true;
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router,
            AngularFirestore])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map