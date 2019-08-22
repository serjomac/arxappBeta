(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-invitados-lista-invitados-module"],{

/***/ "./src/app/lista-invitados/lista-invitados.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/lista-invitados/lista-invitados.module.ts ***!
  \***********************************************************/
/*! exports provided: ListaInvitadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaInvitadosPageModule", function() { return ListaInvitadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lista_invitados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-invitados.page */ "./src/app/lista-invitados/lista-invitados.page.ts");







var routes = [
    {
        path: '',
        component: _lista_invitados_page__WEBPACK_IMPORTED_MODULE_6__["ListaInvitadosPage"]
    }
];
var ListaInvitadosPageModule = /** @class */ (function () {
    function ListaInvitadosPageModule() {
    }
    ListaInvitadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lista_invitados_page__WEBPACK_IMPORTED_MODULE_6__["ListaInvitadosPage"]]
        })
    ], ListaInvitadosPageModule);
    return ListaInvitadosPageModule;
}());



/***/ }),

/***/ "./src/app/lista-invitados/lista-invitados.page.html":
/*!***********************************************************!*\
  !*** ./src/app/lista-invitados/lista-invitados.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons>\n        <ion-button>\n            <ion-back-button defaultHref=\"/menu/home\"></ion-back-button>\n        </ion-button>\n      </ion-buttons>\n    <ion-title>Lista de Invitados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-padding\" *ngFor= \"let invitado of arrayInvitados\">\n    <ion-row class=\"align-items-center\" class=\"ion-justify-content-center ion-align-self-stretch\" style=\"box-shadow: 2px 2px 4px 1px rgba(10,20,32,0.1)\">\n      <ion-col size=\"3\" class=\"\">\n          <img class=\"icon\" src=\"../../assets/images/avatar.svg\" alt=\"\">\n      </ion-col>\n\n      <ion-col class=\"ion-align-items-end\" size=\"3\">\n          <h4>{{invitado.name}}</h4>\n      </ion-col>\n\n      <ion-col  size=\"3\" >\n          <ion-button (click)=\"eliminarInvitadoDeLista(invitado)\" color=\"ligth\" >\n              <ion-icon color=\"danger\" name=\"close\"></ion-icon>   \n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addInvitado(arrayInvitados)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  \n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/lista-invitados/lista-invitados.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/lista-invitados/lista-invitados.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  height: 15vw;\n  width: 15vw;\n  border-radius: 50%;\n  box-shadow: 0 0 5px #3d3d3d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL2xpc3RhLWludml0YWRvcy9saXN0YS1pbnZpdGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0YS1pbnZpdGFkb3MvbGlzdGEtaW52aXRhZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgICBoZWlnaHQ6IDE1dnc7IFxuICAgIHdpZHRoOiAxNXZ3OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoNjEsIDYxLCA2MSk7XG4gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/lista-invitados/lista-invitados.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/lista-invitados/lista-invitados.page.ts ***!
  \*********************************************************/
/*! exports provided: ListaInvitadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaInvitadosPage", function() { return ListaInvitadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _componets_add_invitado_add_invitado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componets/add-invitado/add-invitado.component */ "./src/app/componets/add-invitado/add-invitado.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _servicios_InvitadoServiceService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/InvitadoServiceService */ "./src/app/servicios/InvitadoServiceService.ts");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");









var ListaInvitadosPage = /** @class */ (function () {
    //public invitadoTmp: Invitado;
    function ListaInvitadosPage(dataBase, modal, auth, servicioInvitados, servicioUsuario) {
        this.dataBase = dataBase;
        this.modal = modal;
        this.auth = auth;
        this.servicioInvitados = servicioInvitados;
        this.servicioUsuario = servicioUsuario;
        this.arrayInvitados = [];
        this.listaDeInvitados = [];
    }
    ListaInvitadosPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            //console.log(event);
            var dataTmp = [];
            //this.data = dataTmp;
            //console.log("veamos que tiene data: ", this.listaDeInvitados[1]);
            event.target.complete();
            if (_this.data.length > 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    ListaInvitadosPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    ListaInvitadosPage.prototype.addInvitado = function (listaInvitados) {
        this.modal.create({
            component: _componets_add_invitado_add_invitado_component__WEBPACK_IMPORTED_MODULE_4__["AddInvitadoComponent"],
            componentProps: {
                listaInvitados: listaInvitados,
            }
        }).then(function (modal) { return modal.present(); });
    };
    ListaInvitadosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioInvitados.getInvitadoEstadoTrueByIdResidente(this.auth.auth.currentUser.uid).subscribe(function (res) {
            console.log(res);
            _this.arrayInvitados = res;
        });
    };
    ListaInvitadosPage.prototype.eliminarInvitadoDeLista = function (invitado) {
        //console.log(invitado.uid)
        console.log('se va a cambiar el estdo del invitado: ', invitado.id);
        this.servicioInvitados.updateEstosInvitado(invitado.id, false, this.auth.auth.currentUser.uid);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], ListaInvitadosPage.prototype, "infiniteScroll", void 0);
    ListaInvitadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-invitados',
            template: __webpack_require__(/*! ./lista-invitados.page.html */ "./src/app/lista-invitados/lista-invitados.page.html"),
            styles: [__webpack_require__(/*! ./lista-invitados.page.scss */ "./src/app/lista-invitados/lista-invitados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _servicios_InvitadoServiceService__WEBPACK_IMPORTED_MODULE_6__["InvitadoServiceService"], _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosService"]])
    ], ListaInvitadosPage);
    return ListaInvitadosPage;
}());



/***/ })

}]);
//# sourceMappingURL=lista-invitados-lista-invitados-module.js.map