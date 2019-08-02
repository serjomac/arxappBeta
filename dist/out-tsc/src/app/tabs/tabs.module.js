import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        canActivate: [AuthGuard],
        children: [
            // { path: "tabs/home", component: HomePage },
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'chat', loadChildren: '../chat/chat.module#ChatPageModule' },
            { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
            { path: "home/listainvitados", loadChildren: "../lista-invitados/lista-invitados.module#ListaInvitadosPageModule" },
            { path: "home/listaguardia", loadChildren: "../lista-guardia/lista-guardia.module#ListaGuardiaPageModule" }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/home'
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map