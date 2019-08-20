(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-ingresarurbanizacion-perfil-ingresarurbanizacion-module"],{

/***/ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PerfilIngresarurbanizacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilIngresarurbanizacionPageModule", function() { return PerfilIngresarurbanizacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_ingresarurbanizacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-ingresarurbanizacion.page */ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_ingresarurbanizacion_page__WEBPACK_IMPORTED_MODULE_6__["PerfilIngresarurbanizacionPage"]
    }
];
var PerfilIngresarurbanizacionPageModule = /** @class */ (function () {
    function PerfilIngresarurbanizacionPageModule() {
    }
    PerfilIngresarurbanizacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_ingresarurbanizacion_page__WEBPACK_IMPORTED_MODULE_6__["PerfilIngresarurbanizacionPage"]]
        })
    ], PerfilIngresarurbanizacionPageModule);
    return PerfilIngresarurbanizacionPageModule;
}());



/***/ }),

/***/ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n       <ion-menu-button></ion-menu-button>\n     </ion-buttons>\n     \n     <div class=\"plusClass\" slot=\"end\">\n      <ion-icon name=\"menu\" expand=\"icon-only\" color=\"light\" (click)=\"presentActionSheet()\"> </ion-icon>\n    </div>\n     \n    <ion-title ([ngModel])=\"name\" color=\"light\">\n      Vicrieel\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card >\n      <ion-card-header>\n          <img class=\"icon\" src=\"../../assets/images/avatar.svg\">\n          <ion-card-title class=\"ion-bold ion-text-center marginTop\">{{ nameVisitante }}</ion-card-title>\n\n      </ion-card-header>\n        \n  </ion-card>\n  <ion-card-title class=\"ion-bold ion-text-center marginTop\">Estas a punto de ingresar a Vicrieel</ion-card-title>\n  <ion-card >\n    \n      <div class=\"classVisitas marginTop\">\n        <h1 class=\"ion-text-center\" color=\"primary\" ([ngModel])=\"numVisitas\">Tienes una invitación de {{ nameResidente }}</h1>\n        <!-- <ion-icon routerLink=\"listainvitados\" class=\"bigger\" src=\"assets/icon/visitante.svg\"></ion-icon> -->\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button (click)=\"ingresarCiudadela()\">Ingresar</ion-fab-button>\n        </ion-fab>\n      </div>\n    \n  </ion-card>\n        \n</ion-content>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC1pbmdyZXNhcnVyYmFuaXphY2lvbi9wZXJmaWwtaW5ncmVzYXJ1cmJhbml6YWNpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.ts ***!
  \*********************************************************************************/
/*! exports provided: PerfilIngresarurbanizacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilIngresarurbanizacionPage", function() { return PerfilIngresarurbanizacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _componets_auth_ingresar_ciudadela_auth_ingresar_ciudadela_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component */ "./src/app/componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component.ts");









var PerfilIngresarurbanizacionPage = /** @class */ (function () {
    //public objInvitado: Invitado;
    //public objUsuario: Usuario;
    function PerfilIngresarurbanizacionPage(router, modal, actionSheetController, auth, autFb, dataBase) {
        this.router = router;
        this.modal = modal;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.autFb = autFb;
        this.dataBase = dataBase;
        debugger;
        var objUsuario = JSON.parse(localStorage.getItem('objUsuarioEnSession'));
        //var objInvitado = JSON.parse(localStorage.getItem('objInvitadoEnSession'));
        this.nameVisitante = autFb.auth.currentUser.displayName; //objInvitado.id_usuarioResidente;
        if (objUsuario != null && objUsuario != "") {
            this.nameResidente = objUsuario.name;
        }
        else {
            this.nameResidente = "N/A";
        }
    }
    PerfilIngresarurbanizacionPage.prototype.ingresarCiudadela = function () {
        this.modal.create({
            component: _componets_auth_ingresar_ciudadela_auth_ingresar_ciudadela_component__WEBPACK_IMPORTED_MODULE_7__["AuthIngresarCiudadelaComponent"],
            componentProps: {}
        }).then(function (modal) { return modal.present(); });
    };
    PerfilIngresarurbanizacionPage.prototype.ngOnInit = function () {
    };
    PerfilIngresarurbanizacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-ingresarurbanizacion',
            template: __webpack_require__(/*! ./perfil-ingresarurbanizacion.page.html */ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.html"),
            styles: [__webpack_require__(/*! ./perfil-ingresarurbanizacion.page.scss */ "./src/app/perfil-ingresarurbanizacion/perfil-ingresarurbanizacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], PerfilIngresarurbanizacionPage);
    return PerfilIngresarurbanizacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-ingresarurbanizacion-perfil-ingresarurbanizacion-module.js.map