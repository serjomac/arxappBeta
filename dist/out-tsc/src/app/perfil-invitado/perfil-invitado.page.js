import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
var PerfilInvitadoPage = /** @class */ (function () {
    function PerfilInvitadoPage(router, actionSheetController, auth, autFb, dataBase) {
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.autFb = autFb;
        this.dataBase = dataBase;
        this.numVisitas = '0';
        this.name = autFb.auth.currentUser.displayName;
        this.idInvitado = autFb.auth.currentUser.uid;
        this.getUsuario();
        this.getVisitante();
    }
    PerfilInvitadoPage.prototype.redirectIngresarCiudadela = function () {
        this.router.navigate(["/perfilingresarurbanizacion"]);
    };
    PerfilInvitadoPage.prototype.presentActionSheet = function () {
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
    PerfilInvitadoPage.prototype.getUsuario = function () {
        var _this = this;
        var listaUsuario = this.dataBase.collection('users').valueChanges();
        listaUsuario.forEach(function (usuario) {
            usuario.forEach(function (campoUsuario) {
                //console.log(campoInvitado['id_usuarioVisitante'])
                if (campoUsuario['uid'] == _this.idInvitado) {
                    var objUsuario = campoUsuario;
                    localStorage.setItem('objUsuarioEnSession', JSON.stringify(objUsuario));
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
                if (campoInvitado['id_usuarioResidente'] == _this.idInvitado) {
                    var objInvitado = campoInvitado;
                    localStorage.setItem('objInvitadoEnSession', JSON.stringify(objInvitado));
                    contador++;
                    _this.numVisitas = "" + contador;
                }
            });
            contador = 0;
        });
    };
    PerfilInvitadoPage.prototype.ngOnInit = function () {
    };
    PerfilInvitadoPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil-invitado',
            templateUrl: './perfil-invitado.page.html',
            styleUrls: ['./perfil-invitado.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActionSheetController, AuthService, AngularFireAuth, AngularFirestore])
    ], PerfilInvitadoPage);
    return PerfilInvitadoPage;
}());
export { PerfilInvitadoPage };
//# sourceMappingURL=perfil-invitado.page.js.map