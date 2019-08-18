import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
var LoginPage = /** @class */ (function () {
    function LoginPage(auth, router, db) {
        this.auth = auth;
        this.router = router;
        this.db = db;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onSubmitLogin = function () {
        var _this = this;
        console.log("estas en la funcion de loggeo");
        this.auth.login(this.email, this.password).then(function (res) {
            _this.usuarioEnSesion = _this.db.collection('users').doc(res['user'].uid).valueChanges();
            _this.usuarioEnSesion.forEach(function (data) {
                console.log(data);
                console.log(data['rol']);
                if (data['rol'] == "residente") {
                    _this.router.navigate(['tabs/home']);
                }
                else if (data['rol'] == "visitante") {
                    _this.router.navigate(['tutorial']);
                }
                else {
                    _this.router.navigate(['tabs/home/listaguardia']);
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router, AngularFirestore])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map