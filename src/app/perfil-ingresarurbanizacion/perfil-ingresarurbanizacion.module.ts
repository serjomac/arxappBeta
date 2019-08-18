import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilIngresarurbanizacionPage } from './perfil-ingresarurbanizacion.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilIngresarurbanizacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilIngresarurbanizacionPage]
})
export class PerfilIngresarurbanizacionPageModule {}
