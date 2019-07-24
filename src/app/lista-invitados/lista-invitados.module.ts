import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaInvitadosPage } from './lista-invitados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaInvitadosPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaInvitadosPage]
})
export class ListaInvitadosPageModule {}
