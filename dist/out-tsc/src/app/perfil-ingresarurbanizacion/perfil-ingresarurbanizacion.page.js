import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AuthIngresarCiudadelaComponent } from '../componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component';
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
        var objUsuario = JSON.parse(localStorage.getItem('objUsuarioEnSession'));
        var objInvitado = JSON.parse(localStorage.getItem('objInvitadoEnSession'));
        this.nameVisitante = objInvitado.id_usuarioResidente;
        this.nameResidente = objUsuario.uid;
    }
    PerfilIngresarurbanizacionPage.prototype.ingresarCiudadela = function () {
        this.modal.create({
            component: AuthIngresarCiudadelaComponent,
            componentProps: {}
        }).then(function (modal) { return modal.present(); });
    };
    PerfilIngresarurbanizacionPage.prototype.ngOnInit = function () {
    };
    PerfilIngresarurbanizacionPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil-ingresarurbanizacion',
            templateUrl: './perfil-ingresarurbanizacion.page.html',
            styleUrls: ['./perfil-ingresarurbanizacion.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ModalController, ActionSheetController, AuthService, AngularFireAuth, AngularFirestore])
    ], PerfilIngresarurbanizacionPage);
    return PerfilIngresarurbanizacionPage;
}());
export { PerfilIngresarurbanizacionPage };
//# sourceMappingURL=perfil-ingresarurbanizacion.page.js.map