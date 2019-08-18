import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { InvitadoServiceService } from '../../servicios/InvitadoServiceService';
import { UsuariosService } from '../../servicios/usuarios.service';
var AuthIngresarCiudadelaComponent = /** @class */ (function () {
    function AuthIngresarCiudadelaComponent(dataBase, auth, modal, alert, navParam, servicioInvitado, servicioUsuarios) {
        this.dataBase = dataBase;
        this.auth = auth;
        this.modal = modal;
        this.alert = alert;
        this.navParam = navParam;
        this.servicioInvitado = servicioInvitado;
        this.servicioUsuarios = servicioUsuarios;
    }
    AuthIngresarCiudadelaComponent.prototype.closeChat = function () {
        this.modal.dismiss();
    };
    AuthIngresarCiudadelaComponent.prototype.ngOnInit = function () { };
    AuthIngresarCiudadelaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-auth-ingresar-ciudadela',
            templateUrl: './auth-ingresar-ciudadela.component.html',
            styleUrls: ['./auth-ingresar-ciudadela.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireAuth, ModalController, AlertController, NavParams, InvitadoServiceService, UsuariosService])
    ], AuthIngresarCiudadelaComponent);
    return AuthIngresarCiudadelaComponent;
}());
export { AuthIngresarCiudadelaComponent };
//# sourceMappingURL=auth-ingresar-ciudadela.component.js.map