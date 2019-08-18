import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilIngresarurbanizacionPage } from './perfil-ingresarurbanizacion.page';
var routes = [
    {
        path: '',
        component: PerfilIngresarurbanizacionPage
    }
];
var PerfilIngresarurbanizacionPageModule = /** @class */ (function () {
    function PerfilIngresarurbanizacionPageModule() {
    }
    PerfilIngresarurbanizacionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PerfilIngresarurbanizacionPage]
        })
    ], PerfilIngresarurbanizacionPageModule);
    return PerfilIngresarurbanizacionPageModule;
}());
export { PerfilIngresarurbanizacionPageModule };
//# sourceMappingURL=perfil-ingresarurbanizacion.module.js.map