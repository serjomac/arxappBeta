(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n       <ion-menu-button></ion-menu-button>\n     </ion-buttons>\n     \n     <div class=\"plusClass\" slot=\"end\">\n      <ion-icon name=\"menu\" expand=\"icon-only\" color=\"light\" (click)=\"presentActionSheet()\"> </ion-icon>\n    </div>\n     \n    <ion-title ([ngModel])=\"name\" color=\"light\">\n      {{name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-card >\n    <ion-card-header>\n        <img class=\"icon\" src=\"../../assets/images/avatar.svg\">\n        <ion-card-title class=\"ion-bold ion-text-center marginTop\">{{name}}</ion-card-title>\n        <ion-card-subtitle class=\"ion-text-center marginTop marginBottom\"> Mz {{direccionUsuario.manzana}} villa {{direccionUsuario.villa}}</ion-card-subtitle>\n\n    </ion-card-header>\n    \n    \n</ion-card>\n\n<ion-card >\n\n  \n      <ion-card-title class=\"ion-bold ion-text-center marginTop\">Lista de invitados actual</ion-card-title>\n      <div class=\"classVisitas marginTop\">\n        <h1 color=\"primary\" ([ngModel])=\"numeroInvitadosTotal\">{{numeroInvitadosTotal}}</h1>\n        <ion-icon routerLink=\"listainvitados\" class=\"bigger\" src=\"assets/icon/visitante.svg\"></ion-icon>\n        \n      </div>\n      <ion-card-subtitle class=\"marginTop marginBottom\">Ingresados 3</ion-card-subtitle>\n  \n  \n  \n</ion-card>\n    \n    \n</ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgLogo {\n  width: 30%;\n  height: 30%;\n  margin: auto; }\n\nion-card {\n  box-shadow: 2px 2px 2px 2px rgba(0, 144, 207, 0.1); }\n\n.icon {\n  margin: auto;\n  height: 35vw;\n  width: 35vw;\n  border-radius: 50%;\n  box-shadow: 0 0 5px #3d3d3d; }\n\n.marginBottom {\n  margin-bottom: 20px; }\n\n.marginTop {\n  margin-top: 20px; }\n\n.iconoVisita {\n  width: 25%; }\n\nh1 {\n  color: #0090CF; }\n\n.displayInlineFlex {\n  display: inline-flex; }\n\n.classVisitas {\n  display: inline;\n  display: -webkit-inline-box;\n  margin-left: 120px; }\n\n.center {\n  margin: auto;\n  -webkit-margin: auto; }\n\n.textCenter {\n  text-align: center; }\n\nion-icon.big {\n  width: 50px;\n  height: 50px; }\n\nion-icon.bigger {\n  width: 70px;\n  height: 70px; }\n\nion-icon.red {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxrREFBa0QsRUFBQTs7QUFHdEQ7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQW1DLEVBQUE7O0FBSXZDO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBRUosRUFBQTs7QUFFQTtFQUNJLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFTSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUhsQjtFQU9NLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBUmxCO0VBWU0sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdMb2dve1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWNhcmR7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ0LCAyMDcsIDAuMSk7XG59XG5cbi5pY29uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAzNXZ3OyBcbiAgICB3aWR0aDogMzV2dzsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDYxLCA2MSwgNjEpO1xuICAgXG59XG5cbi5tYXJnaW5Cb3R0b217XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hcmdpblRvcHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmljb25vVmlzaXRhe1xuICAgIHdpZHRoOiAyNSU7XG59XG5oMXtcbiAgICBjb2xvcjogIzAwOTBDRjtcbn1cbi5kaXNwbGF5SW5saW5lRmxleHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmNsYXNzVmlzaXRhc3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIG1hcmdpbi1sZWZ0OjEyMHB4XG4gICAgXG59XG5cbi5jZW50ZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC13ZWJraXQtbWFyZ2luOiBhdXRvO1xufVxuXG4udGV4dENlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgICAmLmJpZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG5cdFxuICAgICYuYmlnZ2VyIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cblx0XG4gICAgJi5yZWQge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _servicios_direcciones_direcciones_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../servicios/direcciones/direcciones.service */ "./src/app/servicios/direcciones/direcciones.service.ts");









var HomePage = /** @class */ (function () {
    function HomePage(router, actionSheetController, auth, autFb, dataBase, servicioDireccion) {
        var _this = this;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.autFb = autFb;
        this.dataBase = dataBase;
        this.servicioDireccion = servicioDireccion;
        this.numeroInvitadosTotal = '0';
        var contador = 0;
        this.name = autFb.auth.currentUser.displayName;
        var listaInvitados = this.dataBase.collection('invitados').valueChanges();
        listaInvitados.forEach(function (invitado) {
            invitado.forEach(function (campoInvitado) {
                //console.log(campoInvitado['id_usuarioVisitante'])
                if (campoInvitado['id_usuarioResidente'] == _this.autFb.auth.currentUser.uid) {
                    contador++;
                    _this.numeroInvitadosTotal = "" + contador;
                }
            });
            contador = 0;
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioDireccion.getDireccionByIdResidente(this.autFb.auth.currentUser.uid).subscribe(function (res) {
            _this.direccionUsuario = res[0];
        });
    };
    HomePage.prototype.presentActionSheet = function () {
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
    HomePage.prototype.getUsers = function () {
        return this.dataBase.collection('users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (users) {
            return users.map(function (user) {
                var userTmp = user.payload.doc.data();
                console.log(userTmp);
            });
        }));
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _servicios_direcciones_direcciones_service__WEBPACK_IMPORTED_MODULE_8__["DireccionesService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map