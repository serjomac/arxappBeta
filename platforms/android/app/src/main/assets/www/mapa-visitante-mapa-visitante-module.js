(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapa-visitante-mapa-visitante-module"],{

/***/ "./src/app/mapa-visitante/mapa-visitante.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mapa-visitante/mapa-visitante.module.ts ***!
  \*********************************************************/
/*! exports provided: MapaVisitantePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaVisitantePageModule", function() { return MapaVisitantePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_visitante_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa-visitante.page */ "./src/app/mapa-visitante/mapa-visitante.page.ts");







var routes = [
    {
        path: '',
        component: _mapa_visitante_page__WEBPACK_IMPORTED_MODULE_6__["MapaVisitantePage"]
    }
];
var MapaVisitantePageModule = /** @class */ (function () {
    function MapaVisitantePageModule() {
    }
    MapaVisitantePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mapa_visitante_page__WEBPACK_IMPORTED_MODULE_6__["MapaVisitantePage"]]
        })
    ], MapaVisitantePageModule);
    return MapaVisitantePageModule;
}());



/***/ }),

/***/ "./src/app/mapa-visitante/mapa-visitante.page.html":
/*!*********************************************************!*\
  !*** ./src/app/mapa-visitante/mapa-visitante.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons>\n            <ion-button>\n                <ion-back-button defaultHref=\"/guardia\"></ion-back-button>\n            </ion-button>\n          </ion-buttons>\n      \n       \n      <ion-title ([ngModel])=\"name\" color=\"light\">Urbanización Vicrieel</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  \n  <div class=\"mapa-urbanizacion\">\n\n    <div class=\"club\"><button (click)=\"ingresarClub()\" class=\"ingresarAreas\"></button></div>\n    <div class=\"Parque\"><button (click)=\"ingresarParque()\" class=\"ingresarAreas\"></button></div>\n    <img class=\"Complejo\" (click)=\"ingresarComplejo()\"  src=\"../../assets/images/iconoParque.png\"/>\n    <img class=\"Parque\" (click)=\"ingresarParque()\"  src=\"../../assets/images/iconoGym.png\"/>\n    <img class=\"club\" (click)=\"ingresarClub()\"  src=\"../../assets/images/iconoPiscina.png\"/> \n\n    <!-- QR Club -->\n    <div id=\"mostrarQRClub\" *ngIf= \"estadoQRClub == true\">\n        <br>\n      <h1>QR Club</h1>\n      <br>\n      <img src=\"../../assets/images/clubQr.png\" style=\"width: 140px\" alt=\"Codigo QR\">\n      <br>\n      <ion-button color=\"secondary\" (click)=\"ocultarQr()\">Ok</ion-button>\n    </div>\n\n    <!-- QR Complejo -->\n    <div id=\"mostrarQRComplejo\" *ngIf= \"estadoQRComplejo == true\">\n        <br>\n      <h1>QR Parque</h1>\n      <br>\n      <img src=\"../../assets/images/parqueQr.png\" style=\"width: 140px\" alt=\"Codigo QR\">\n      <br>\n      <ion-button color=\"secondary\" (click)=\"ocultarQr()\">Ok</ion-button>\n    </div>\n\n      <!-- QR Parque -->\n    <div id=\"mostrarQRParque\" *ngIf= \"estadoQRParque == true\">\n        <br>\n      <h1>QR GYM</h1>\n      <br>\n      <img src=\"../../assets/images/gymQr.png\" style=\"width: 140px\" alt=\"Codigo QR\">\n      <br>\n      <ion-button color=\"secondary\" (click)=\"ocultarQr()\">Ok</ion-button>\n    </div>\n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mapa-visitante/mapa-visitante.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/mapa-visitante/mapa-visitante.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapa-urbanizacion {\n  background-image: url('mapaIlustrado.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: -webkit-fill-available; }\n\n.club {\n  position: absolute;\n  width: 17vw;\n  height: 17vw;\n  margin: 5rem 0 0 5rem;\n  cursor: pointer; }\n\n.Parque {\n  position: absolute;\n  width: 17vw;\n  height: 17vw;\n  margin: 12rem 0 0 16rem;\n  cursor: pointer; }\n\n.Complejo {\n  position: absolute;\n  width: 17vw;\n  height: 17vw;\n  margin: 21em 0 0 6rem;\n  cursor: pointer; }\n\n.ingresarAreas {\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n  margin: 0px; }\n\n#mostrarQRClub {\n  position: absolute;\n  left: calc(57% - 50%);\n  top: calc(35% - 20%);\n  width: 20rem;\n  height: 20rem;\n  box-shadow: inset 0px 0px 4px #848484;\n  border-radius: 50%;\n  background-color: #0090cf;\n  text-align: center; }\n\n#mostrarQRComplejo {\n  position: absolute;\n  left: calc(57% - 50%);\n  top: calc(35% - 20%);\n  width: 20rem;\n  height: 20rem;\n  box-shadow: inset 0px 0px 4px #848484;\n  border-radius: 50%;\n  background-color: #0090cf;\n  text-align: center; }\n\n#mostrarQRParque {\n  position: absolute;\n  left: calc(57% - 50%);\n  top: calc(35% - 20%);\n  width: 20rem;\n  height: 20rem;\n  box-shadow: inset 0px 0px 4px #848484;\n  border-radius: 50%;\n  background-color: #0090cf;\n  text-align: center; }\n\n#mostrarQRClub h1, #mostrarQRParque h1, #mostrarQRComplejo h1 {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL21hcGEtdmlzaXRhbnRlL21hcGEtdmlzaXRhbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUE4RDtFQUM5RCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTs7QUFJbEM7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFFWixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBR1oscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcGEtdmlzaXRhbnRlL21hcGEtdmlzaXRhbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBhLXVyYmFuaXphY2lvbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21hcGFJbHVzdHJhZG8ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIC8vIGhlaWdodDogYXV0bztcbn1cblxuLmNsdWJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxN3Z3O1xuICAgIGhlaWdodDogMTd2dztcbiAgICBcbiAgICBtYXJnaW46IDVyZW0gMCAwIDVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uUGFycXVle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTd2dztcbiAgICBoZWlnaHQ6IDE3dnc7XG4gICAgbWFyZ2luOiAxMnJlbSAwIDAgMTZyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uQ29tcGxlam97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxN3Z3O1xuICAgIGhlaWdodDogMTd2dztcbiAgICBcbiAgICBcbiAgICBtYXJnaW46IDIxZW0gMCAwIDZyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5ncmVzYXJBcmVhc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuI21vc3RyYXJRUkNsdWJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTclIC0gNTAlKTtcbiAgICB0b3A6IGNhbGMoMzUlIC0gMjAlKTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDRweCAjODQ4NDg0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MGNmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21vc3RyYXJRUkNvbXBsZWpve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDU3JSAtIDUwJSk7XG4gICAgdG9wOiBjYWxjKDM1JSAtIDIwJSk7XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGhlaWdodDogMjByZW07XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0cHggIzg0ODQ4NDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTBjZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtb3N0cmFyUVJQYXJxdWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTclIC0gNTAlKTtcbiAgICB0b3A6IGNhbGMoMzUlIC0gMjAlKTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDRweCAjODQ4NDg0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MGNmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21vc3RyYXJRUkNsdWIgaDEsICNtb3N0cmFyUVJQYXJxdWUgaDEsICNtb3N0cmFyUVJDb21wbGVqbyBoMSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/mapa-visitante/mapa-visitante.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/mapa-visitante/mapa-visitante.page.ts ***!
  \*******************************************************/
/*! exports provided: MapaVisitantePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaVisitantePage", function() { return MapaVisitantePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MapaVisitantePage = /** @class */ (function () {
    function MapaVisitantePage(modal, alert) {
        this.modal = modal;
        this.alert = alert;
        this.estadoQRClub = false;
        this.estadoQRComplejo = false;
        this.estadoQRParque = false;
    }
    MapaVisitantePage.prototype.ingresarClub = function () {
        console.log('ingreso por ingresarClub()');
        this.generarQRClub();
    };
    MapaVisitantePage.prototype.ingresarParque = function () {
        console.log('ingreso por ingresarParque()');
        this.generarQRParque();
    };
    MapaVisitantePage.prototype.ingresarComplejo = function () {
        console.log('ingreso por ingresarComplejo()');
        this.generarQRComplejo();
    };
    MapaVisitantePage.prototype.mostrarElQRGeneradoClub = function () {
        console.log('despues del modal');
        this.estadoQRClub = true;
        this.estadoQRComplejo = false;
        this.estadoQRParque = false;
    };
    MapaVisitantePage.prototype.ocultarQr = function () {
        this.estadoQRClub = false;
        this.estadoQRComplejo = false;
        this.estadoQRParque = false;
    };
    MapaVisitantePage.prototype.mostrarElQRGeneradoComplejo = function () {
        console.log('despues del modal');
        this.estadoQRClub = false;
        this.estadoQRComplejo = true;
        this.estadoQRParque = false;
    };
    MapaVisitantePage.prototype.mostrarElQRGeneradoParque = function () {
        console.log('despues del modal');
        this.estadoQRClub = false;
        this.estadoQRComplejo = false;
        this.estadoQRParque = true;
    };
    MapaVisitantePage.prototype.generarQRClub = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Estás por ingresar al club',
                            subHeader: '¿Seguro qué deseas realizar esta acción?',
                            //message: 'Estás por ingresar al club',
                            buttons: [{
                                    text: "Aceptar",
                                    handler: function (blah) {
                                        _this.mostrarElQRGeneradoClub();
                                    }
                                }, {
                                    text: "Cancelar",
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
    MapaVisitantePage.prototype.generarQRParque = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Estás por ingresar al gimnasio',
                            subHeader: '¿Seguro qué deseas realizar esta acción?',
                            //message: 'Estás por ingresar al club',
                            buttons: [{
                                    text: "Aceptar",
                                    handler: function (blah) {
                                        _this.mostrarElQRGeneradoParque();
                                    }
                                }, {
                                    text: "Cancelar",
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
    MapaVisitantePage.prototype.generarQRComplejo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Estás por ingresar al parque',
                            subHeader: '¿Seguro qué deseas realizar esta acción?',
                            //message: 'Estás por ingresar al club',
                            buttons: [{
                                    text: "Aceptar",
                                    handler: function (blah) {
                                        _this.mostrarElQRGeneradoComplejo();
                                    }
                                }, {
                                    text: "Cancelar",
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
    MapaVisitantePage.prototype.ngOnInit = function () {
    };
    MapaVisitantePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa-visitante',
            template: __webpack_require__(/*! ./mapa-visitante.page.html */ "./src/app/mapa-visitante/mapa-visitante.page.html"),
            styles: [__webpack_require__(/*! ./mapa-visitante.page.scss */ "./src/app/mapa-visitante/mapa-visitante.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MapaVisitantePage);
    return MapaVisitantePage;
}());



/***/ })

}]);
//# sourceMappingURL=mapa-visitante-mapa-visitante-module.js.map