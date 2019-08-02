import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/no-login.guard';
import { TutorialComponent } from './componets/tutorial/tutorial.component';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
    //{ path: 'tabs/lista-invitados', component:ListaInvitadosPage},
    { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [NoLoginGuard] },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule', canActivate: [NoLoginGuard] },
    { path: 'tutorial', component: TutorialComponent, canActivate: [AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map