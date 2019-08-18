import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var HomePage = /** @class */ (function () {
    function HomePage(router, actionSheetController, auth, autFb, dataBase) {
        var _this = this;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.autFb = autFb;
        this.dataBase = dataBase;
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
    HomePage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
        return this.dataBase.collection('users').snapshotChanges().pipe(map(function (users) {
            return users.map(function (user) {
                var userTmp = user.payload.doc.data();
                console.log(userTmp);
            });
        }));
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActionSheetController, AuthService, AngularFireAuth, AngularFirestore])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map