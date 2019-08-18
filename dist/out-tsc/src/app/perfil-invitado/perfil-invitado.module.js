import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilInvitadoPage } from './perfil-invitado.page';
var routes = [
    {
        path: '',
        component: PerfilInvitadoPage
    }
];
var PerfilInvitadoPageModule = /** @class */ (function () {
    function PerfilInvitadoPageModule() {
    }
    PerfilInvitadoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PerfilInvitadoPage]
        })
    ], PerfilInvitadoPageModule);
    return PerfilInvitadoPageModule;
}());
export { PerfilInvitadoPageModule };
//# sourceMappingURL=perfil-invitado.module.js.map