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

module.exports = "\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons>\n        <ion-button>\n            <ion-back-button defaultHref=\"/menu/home\"></ion-back-button>\n        </ion-button>\n      </ion-buttons>\n    <ion-title>Lista de Invitados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-tab-button >\n      <ion-icon name=\"camera\"></ion-icon>\n      <ion-label>Photo</ion-label>\n    </ion-tab-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/lista-invitados/lista-invitados.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/lista-invitados/lista-invitados.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLWludml0YWRvcy9saXN0YS1pbnZpdGFkb3MucGFnZS5zY3NzIn0= */"

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


//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
var ListaInvitadosPage = /** @class */ (function () {
    function ListaInvitadosPage() {
    }
    ListaInvitadosPage.prototype.ngOnInit = function () {
    };
    ListaInvitadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-invitados',
            template: __webpack_require__(/*! ./lista-invitados.page.html */ "./src/app/lista-invitados/lista-invitados.page.html"),
            styles: [__webpack_require__(/*! ./lista-invitados.page.scss */ "./src/app/lista-invitados/lista-invitados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListaInvitadosPage);
    return ListaInvitadosPage;
}());



/***/ })

}]);
//# sourceMappingURL=lista-invitados-lista-invitados-module.js.map