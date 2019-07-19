import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ListaInvitadosPage } from '../lista-invitados/lista-invitados.page';
import { ListaInvitadosPageModule } from '../lista-invitados/lista-invitados.module';
import { AuthGuard } from '../guards/auth.guard'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate:[AuthGuard],
    children:[
     // { path: "tabs/home", component: HomePage },
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'chat', loadChildren: '../chat/chat.module#ChatPageModule' },
      { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
      {path: "home/listainvitados", loadChildren:"../lista-invitados/lista-invitados.module#ListaInvitadosPageModule" }
      ]
  },
  {
    path:'',
    redirectTo:'tabs/home'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
