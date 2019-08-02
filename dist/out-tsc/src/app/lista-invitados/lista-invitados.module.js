import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaInvitadosPage } from './lista-invitados.page';
var routes = [
    {
        path: '',
        component: ListaInvitadosPage
    }
];
var ListaInvitadosPageModule = /** @class */ (function () {
    function ListaInvitadosPageModule() {
    }
    ListaInvitadosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaInvitadosPage]
        })
    ], ListaInvitadosPageModule);
    return ListaInvitadosPageModule;
}());
export { ListaInvitadosPageModule };
//# sourceMappingURL=lista-invitados.module.js.map