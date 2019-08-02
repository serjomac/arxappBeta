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
            this.auth.register(this.email, this.password, this.name, this.rolSeleccionado).then(function (auth) {
                _this.usuarioEnSesion = _this.dataBase.collection('users').doc(auth['user'].uid).valueChanges();
                _this.usuarioEnSesion.forEach(function (data) {
                    console.log(data['rol']);
                    if (data['rol'] == "residente") {
                        _this.router.navigate(['tabs/home']);
                    }
                    else if (data['rol'] == "visitante") {
                        _this.router.navigate(['tutorial']);
                    }
                });
                //this.router.navigate(['tabs/home'])
            }).catch(function (err) { return console.log(err); });
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