import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaInvitadosGuardiaPage } from './lista-invitados-guardia.page';
var routes = [
    {
        path: '',
        component: ListaInvitadosGuardiaPage
    }
];
var ListaInvitadosGuardiaPageModule = /** @class */ (function () {
    function ListaInvitadosGuardiaPageModule() {
    }
    ListaInvitadosGuardiaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaInvitadosGuardiaPage]
        })
    ], ListaInvitadosGuardiaPageModule);
    return ListaInvitadosGuardiaPageModule;
}());
export { ListaInvitadosGuardiaPageModule };
//# sourceMappingURL=lista-invitados-guardia.module.js.map