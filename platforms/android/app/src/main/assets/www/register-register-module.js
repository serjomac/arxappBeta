(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Registrarse</ion-title>\n    \n    <ion-buttons>\n        <ion-button>\n            <ion-back-button defaultHref=\"/login\"></ion-back-button>\n        </ion-button>\n      </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img class=\"logoImg\" src=\"assets/images/logoArxapp.png\" alt=\"\">\n\n  <ion-item class=\"seleccionStyle\">\n    <ion-label>Tipo de usuario</ion-label>\n    <ion-select  [(ngModel)]=\"seleccion\" cancelText=\"Cancelar\" (ngModelChange)=\"selectValue(seleccion)\" placeholder=\"Sleleccionar un tipo de usuario\">\n      <ion-select-option value=\"residente\">Residente</ion-select-option>\n      <ion-select-option value=\"visitante\">Visitante</ion-select-option>\n      <ion-select-option value=\"guardia\">Guardia</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" name=\"name\" [(ngModel)] = 'name'></ion-input>\n  \n  </ion-item>\n\n  \n  <ion-item>\n\n    <ion-label position=\"floating\">Usuario</ion-label>\n    <ion-input type=\"text\" name=\"username\" [(ngModel)] = 'username'></ion-input>\n\n</ion-item>\n<ion-item>\n\n    <ion-label position=\"floating\">Correo</ion-label>\n    <ion-input type=\"text\" name=\"email\" [(ngModel)] = 'email'></ion-input>\n\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">Clave</ion-label>\n    <ion-input type=\"password\" [(ngModel)] =\"password\" ></ion-input>\n\n</ion-item>\n<br>\n<ion-button  expand=\"block\" (click)=\"onSubmitRegister()\">Registrarse</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoImg {\n  width: 30%;\n  margin: auto;\n  display: block;\n  margin-top: 30px; }\n\n.seleccionStyle {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29JbWd7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNlbGVjY2lvblN0eWxle1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(auth, router, dataBase, alert) {
        this.auth = auth;
        this.router = router;
        this.dataBase = dataBase;
        this.alert = alert;
        this.seleccion = "";
        this.name = "";
        this.email = "";
        this.password = "";
        this.rolSeleccionado = "";
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
        if (this.email != "" && this.password != "" && this.rolSeleccionado != "" && this.username != "") {
            console.log(this.usurioExiste);
            if (!this.usurioExiste) {
                this.auth.register(this.email, this.password, this.name, this.rolSeleccionado, this.username).then(function (auth) {
                    if (_this.rolSeleccionado == "residente") {
                        _this.router.navigate(['tabs/home']);
                    }
                    else if (_this.rolSeleccionado == "visitante") {
                        _this.router.navigate(["/tutorial"]);
                    }
                    else {
                        _this.router.navigate(["/guardia"]);
                    }
                    //this.router.navigate(['tabs/home'])
                }).catch(function (err) { return console.log(err); });
            }
            // console.log(this.usurioExiste)
        }
        else {
            this.alertCamposImcompletos();
        }
    };
    RegisterPage.prototype.alertCamposImcompletos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            subHeader: 'Ocurrio un error en el registro',
                            message: "Debe llenar todos los campos",
                            buttons: [{
                                    text: "Aceptar",
                                    handler: function (blah) {
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map