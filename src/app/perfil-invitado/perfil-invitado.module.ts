import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilInvitadoPage } from './perfil-invitado.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilInvitadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilInvitadoPage]
})
export class PerfilInvitadoPageModule {}
