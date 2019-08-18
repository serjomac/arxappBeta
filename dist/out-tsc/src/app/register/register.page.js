import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(auth, router, dataBase) {
        this.auth = auth;
        this.router = router;
        this.dataBase = dataBase;
        this.usurioExiste = false;
        this.existeUsuario = function (username) {
            var users = this.dataBase.collection('users').valueChanges();
            var retorno = false;
            users.forEach(function (user) {
                //debugger
                for (var i = 0; i < user.length; i++) {
                    if (username == user[i]['username']) {
                        retorno = true;
                        break;
                    }
                    else {
                        retorno = false;
                    }
                }
            });
            return retorno;
        };
        this.selectValue = function (mySelect) {
            this.rolSeleccionado = mySelect;
            console.log(mySelect);
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
        console.log(this.seleccion);
    };
    RegisterPage.prototype.onSubmitRegister = function () {
        var _this = this;
        if (this.rolSeleccionado == '') {
            alert('Debe seleccionar un tipo de usuario');
        }
        else {
            //debugger
            console.log(this.usurioExiste);
            if (!this.usurioExiste) {
                this.auth.register(this.email, this.password, this.name, this.rolSeleccionado, this.username).then(function (auth) {
                    _this.router.navigate(['tabs/home']);
                    //this.router.navigate(['tabs/home'])
                }).catch(function (err) { return console.log(err); });
            }
            // console.log(this.usurioExiste)
        }
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router, AngularFirestore])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map