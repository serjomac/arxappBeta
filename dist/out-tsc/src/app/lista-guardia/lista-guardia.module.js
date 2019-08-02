import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaGuardiaPage } from './lista-guardia.page';
var routes = [
    {
        path: '',
        component: ListaGuardiaPage
    }
];
var ListaGuardiaPageModule = /** @class */ (function () {
    function ListaGuardiaPageModule() {
    }
    ListaGuardiaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaGuardiaPage]
        })
    ], ListaGuardiaPageModule);
    return ListaGuardiaPageModule;
}());
export { ListaGuardiaPageModule };
//# sourceMappingURL=lista-guardia.module.js.map