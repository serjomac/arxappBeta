import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaVisitantePage } from './mapa-visitante.page';

const routes: Routes = [
  {
    path: '',
    component: MapaVisitantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapaVisitantePage]
})
export class MapaVisitantePageModule {}
