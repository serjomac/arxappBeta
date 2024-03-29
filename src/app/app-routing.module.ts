import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaInvitadosPage } from './lista-invitados/lista-invitados.page';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/no-login.guard';
import { from } from 'rxjs';
import { TutorialComponent } from './componets/tutorial/tutorial.component';


const routes: Routes = [
    
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'tabs/lista-invitados', component:ListaInvitadosPage},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate:[NoLoginGuard]},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule',canActivate:[NoLoginGuard]},
  { path: 'tutorial', component: TutorialComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
