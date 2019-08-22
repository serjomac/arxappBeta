(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.html":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n       <ion-menu-button></ion-menu-button>\n     </ion-buttons>\n     \n     <div class=\"plusClass\" slot=\"end\">\n      <ion-icon name=\"menu\" expand=\"icon-only\" color=\"light\" (click)=\"presentActionSheet()\"> </ion-icon>\n    </div>\n     \n    <ion-title ([ngModel])=\"name\" color=\"light\">\n      {{name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-card >\n    <ion-card-header>\n        <img class=\"icon\" src=\"../../assets/images/avatar.svg\">\n        <ion-card-title class=\"ion-bold ion-text-center marginTop\">{{name}}</ion-card-title>\n        <ion-card-subtitle class=\"ion-text-center marginTop marginBottom\"> Manzana {{direccionDelUsuario.manzana}} villa {{direccionDelUsuario.villa}}</ion-card-subtitle>\n\n    </ion-card-header>\n    \n    \n</ion-card>\n<div *ngIf = \"direccionDelUsuario\">\n<ion-list >\n<ion-item >\n\n\n    <label for=\"\">Manzana: </label>\n    <ion-input  [(ngModel)] = \"manzana\"  type=\"text\" #name=\"ngModel\"></ion-input>\n  \n</ion-item>\n\n<ion-item>\n\n  <label for=\"\">Villa: </label>\n  <ion-input [(ngModel)] = \"villa\"  type=\"text\"  #name=\"ngModel\" ></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <label for=\"\">Referencia: </label>\n  <ion-input [(ngModel)] = \"referencia\" type=\"text\"  #name=\"ngModel\" ></ion-input>\n\n</ion-item>\n</ion-list>\n</div>\n<div>\n  <ion-button color=\"primary\" (click)=\"actualizarDatos()\"> actualizar </ion-button>\n</div>\n    \n    \n</ion-content>"

/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgLogo {\n  width: 30%;\n  height: 30%;\n  margin: auto; }\n\nion-card {\n  box-shadow: 2px 2px 2px 2px rgba(0, 144, 207, 0.1); }\n\n.icon {\n  margin: auto;\n  height: 35vw;\n  width: 35vw;\n  border-radius: 50%;\n  box-shadow: 0 0 5px #3d3d3d; }\n\n.marginBottom {\n  margin-bottom: 20px; }\n\n.marginTop {\n  margin-top: 20px; }\n\n.iconoVisita {\n  width: 25%; }\n\nh1 {\n  color: #0090CF; }\n\n.displayInlineFlex {\n  display: inline-flex; }\n\n.classVisitas {\n  display: inline;\n  display: -webkit-inline-box;\n  margin-left: 120px; }\n\n.center {\n  margin: auto;\n  -webkit-margin: auto; }\n\n.textCenter {\n  text-align: center; }\n\nion-icon.big {\n  width: 50px;\n  height: 50px; }\n\nion-icon.bigger {\n  width: 70px;\n  height: 70px; }\n\nion-icon.red {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0RBQWtELEVBQUE7O0FBR3REO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUFtQyxFQUFBOztBQUl2QztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtCQUVKLEVBQUE7O0FBRUE7RUFDSSxZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRU0sV0FBVztFQUNYLFlBQVksRUFBQTs7QUFIbEI7RUFPTSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQVJsQjtFQVlNLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0xvZ297XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5pb24tY2FyZHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDQsIDIwNywgMC4xKTtcbn1cblxuLmljb24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDM1dnc7IFxuICAgIHdpZHRoOiAzNXZ3OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoNjEsIDYxLCA2MSk7XG4gICBcbn1cblxuLm1hcmdpbkJvdHRvbXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWFyZ2luVG9we1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaWNvbm9WaXNpdGF7XG4gICAgd2lkdGg6IDI1JTtcbn1cbmgxe1xuICAgIGNvbG9yOiAjMDA5MENGO1xufVxuLmRpc3BsYXlJbmxpbmVGbGV4e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2xhc3NWaXNpdGFze1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgbWFyZ2luLWxlZnQ6MTIwcHhcbiAgICBcbn1cblxuLmNlbnRlcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLXdlYmtpdC1tYXJnaW46IGF1dG87XG59XG5cbi50ZXh0Q2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICAgICYuYmlnIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cblx0XG4gICAgJi5iaWdnZXIge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuXHRcbiAgICAmLnJlZCB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_direcciones_direcciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/direcciones/direcciones.service */ "./src/app/servicios/direcciones/direcciones.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var PerfilPage = /** @class */ (function () {
    function PerfilPage(servicioDirecciones, auth) {
        this.servicioDirecciones = servicioDirecciones;
        this.auth = auth;
        this.manzana = '';
        this.villa = '';
        this.referenncia = '';
        this.arryDir = [];
    }
    PerfilPage.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioDirecciones.getDireccionByIdResidente(this.auth.auth.currentUser.uid).subscribe(function (res) {
            console.log(res[0]);
            _this.direccionDelUsuario = res[0];
            _this.arryDir = res;
            _this.manzana = _this.direccionDelUsuario[0].manzana;
            _this.villa = _this.direccionDelUsuario[0].villa;
            _this.referenncia = _this.direccionDelUsuario[0].referencia;
            console.log("dsadsadasd", _this.arryDir[0]);
        });
    };
    PerfilPage.prototype.actualizarDatos = function () {
        var direccionNueva = {
            id_usuarioResidente: this.auth.auth.currentUser.uid,
            villa: this.villa,
            manzana: this.manzana,
            referencia: this.referenncia
        };
        this.servicioDirecciones.updateDireccionDeUnUsuario(this.arryDir[0].id, direccionNueva);
    };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.page.html */ "./src/app/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_direcciones_direcciones_service__WEBPACK_IMPORTED_MODULE_2__["DireccionesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map