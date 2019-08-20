(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-invitado-perfil-invitado-module"],{

/***/ "./src/app/perfil-invitado/perfil-invitado.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/perfil-invitado/perfil-invitado.module.ts ***!
  \***********************************************************/
/*! exports provided: PerfilInvitadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilInvitadoPageModule", function() { return PerfilInvitadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_invitado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-invitado.page */ "./src/app/perfil-invitado/perfil-invitado.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_invitado_page__WEBPACK_IMPORTED_MODULE_6__["PerfilInvitadoPage"]
    }
];
var PerfilInvitadoPageModule = /** @class */ (function () {
    function PerfilInvitadoPageModule() {
    }
    PerfilInvitadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_invitado_page__WEBPACK_IMPORTED_MODULE_6__["PerfilInvitadoPage"]]
        })
    ], PerfilInvitadoPageModule);
    return PerfilInvitadoPageModule;
}());



/***/ }),

/***/ "./src/app/perfil-invitado/perfil-invitado.page.html":
/*!***********************************************************!*\
  !*** ./src/app/perfil-invitado/perfil-invitado.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n      \n     \n     <div class=\"plusClass\" slot=\"end\">\n      <ion-icon name=\"menu\" expand=\"icon-only\" color=\"light\" (click)=\"presentActionSheet()\"> </ion-icon>\n    </div>\n     \n    <ion-title ([ngModel])=\"name\" color=\"light\">\n      Vicrieel\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card >\n      <ion-card-header>\n          <img class=\"icon\" src=\"../../assets/images/avatar.svg\">\n          <ion-card-title class=\"ion-bold ion-text-center marginTop\">{{ name }}</ion-card-title>\n\n      </ion-card-header>\n        \n  </ion-card>\n\n  <ion-card >\n    \n      <ion-card-title class=\"ion-bold ion-text-center marginTop\"></ion-card-title>\n      <div class=\"classVisitas marginTop\">\n        <h1 class=\"ion-text-center\" color=\"primary\" ([ngModel])=\"numVisitas\">{{ numVisitas }} visitas a Vicrieel</h1>\n        <!-- <ion-icon routerLink=\"listainvitados\" class=\"bigger\" src=\"assets/icon/visitante.svg\"></ion-icon> -->\n        \n      </div>\n    \n  </ion-card>\n<div *ngFor=\"let notificaiones of notificaiones\">\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf= \"notificaiones.estado == true\">\n    <ion-fab-button (click)=\"redirectIngresarCiudadela()\">{{mostrarNotificacion}}</ion-fab-button>\n  </ion-fab>\n</div>\n</ion-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/perfil-invitado/perfil-invitado.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/perfil-invitado/perfil-invitado.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin: auto;\n  height: 35vw;\n  width: 35vw;\n  border-radius: 50%;\n  box-shadow: 0 0 5px #3d3d3d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL3BlcmZpbC1pbnZpdGFkby9wZXJmaWwtaW52aXRhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUFtQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsLWludml0YWRvL3BlcmZpbC1pbnZpdGFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMzV2dzsgXG4gICAgd2lkdGg6IDM1dnc7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYig2MSwgNjEsIDYxKTtcbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/perfil-invitado/perfil-invitado.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/perfil-invitado/perfil-invitado.page.ts ***!
  \*********************************************************/
/*! exports provided: PerfilInvitadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilInvitadoPage", function() { return PerfilInvitadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");









var PerfilInvitadoPage = /** @class */ (function () {
    function PerfilInvitadoPage(router, actionSheetController, auth, autFb, dataBase, socketIO, ngZone) {
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.autFb = autFb;
        this.dataBase = dataBase;
        this.socketIO = socketIO;
        this.ngZone = ngZone;
        this.mostrarNotificacion = false;
        this.numVisitas = '0';
        this.notificaiones = [];
        localStorage.setItem('objUsuarioEnSession', JSON.stringify(""));
        this.name = autFb.auth.currentUser.displayName;
        this.idInvitado = autFb.auth.currentUser.uid;
        //debugger
        this.getVisitante();
        this.getUsuario();
        //autFb.auth.currentUser.uid = this.idInvitado;
    }
    PerfilInvitadoPage.prototype.redirectIngresarCiudadela = function () {
        this.router.navigate(["/perfil-ingresarurbanizacion"]);
    };
    PerfilInvitadoPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Opciones',
                            buttons: [{
                                    text: 'Cerrar sesion',
                                    role: 'destructive',
                                    icon: 'log-out',
                                    handler: function () {
                                        _this.auth.logOut();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilInvitadoPage.prototype.getUsuario = function () {
        var _this = this;
        var listaUsuario = this.dataBase.collection('users').valueChanges();
        listaUsuario.forEach(function (usuario) {
            usuario.forEach(function (campoUsuario) {
                //console.log(campoInvitado['id_usuarioVisitante'])
                //debugger
                if (campoUsuario['uid'] == _this.idInvitado && campoUsuario['rol'] == "residente") {
                    var objUsuario = campoUsuario;
                    localStorage.setItem('objUsuarioEnSession', JSON.stringify(objUsuario));
                    return;
                }
            });
        });
    };
    PerfilInvitadoPage.prototype.getVisitante = function () {
        var _this = this;
        var contador = 0;
        var listaInvitados = this.dataBase.collection('invitados').valueChanges();
        listaInvitados.forEach(function (invitado) {
            invitado.forEach(function (campoInvitado) {
                //console.log(campoInvitado['id_usuarioVisitante'])
                //debugger
                if (campoInvitado['uid'] == _this.idInvitado) {
                    _this.idInvitado = campoInvitado['id_usuarioResidente'];
                    var objInvitado = campoInvitado;
                    localStorage.setItem('objInvitadoEnSession', JSON.stringify(objInvitado));
                    contador++;
                    _this.numVisitas = "" + contador;
                    return;
                }
            });
            contador = 0;
        });
    };
    PerfilInvitadoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.socketIO.connect();
        this.getNoti().subscribe(function (noti) {
            _this.notificaiones = [];
            _this.mostrarNotificacion = false;
            _this.notificaiones.push(noti);
            localStorage.setItem("notificaciones", JSON.stringify(_this.notificaiones));
            for (var i = 0; i < _this.notificaiones.length; i++) {
                //debugger
                if (_this.notificaiones[i].id_visitante != _this.autFb.auth.currentUser.uid) {
                    console.log("se enviaro pero no te pertenece la notificacion");
                }
                else if (_this.notificaiones[i].invitacion_activa == true) {
                    _this.mostrarNotificacion = true;
                    console.log(_this.notificaiones[i]);
                    break;
                }
            }
        });
    };
    PerfilInvitadoPage.prototype.getNoti = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socketIO.on("notificacion", function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    PerfilInvitadoPage.prototype.connect = function () {
        var _this = this;
        var isAvailable;
        var isWaitng;
        this.socketIO.on("result", function (result) {
            _this.ngZone.run(function () {
                isAvailable = true;
                isWaitng = false;
                var data = result;
                console.log("result");
                console.log(result);
            });
        });
    };
    PerfilInvitadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-invitado',
            template: __webpack_require__(/*! ./perfil-invitado.page.html */ "./src/app/perfil-invitado/perfil-invitado.page.html"),
            styles: [__webpack_require__(/*! ./perfil-invitado.page.scss */ "./src/app/perfil-invitado/perfil-invitado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], PerfilInvitadoPage);
    return PerfilInvitadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-invitado-perfil-invitado-module.js.map