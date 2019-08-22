import { Component, OnInit } from '@angular/core';
import { create } from 'domain';

import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { AuthIngresarCiudadelaComponent } from '../componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component';
import { setTimeout } from 'timers';


@Component({
  selector: 'app-mapa-visitante',
  templateUrl: './mapa-visitante.page.html',
  styleUrls: ['./mapa-visitante.page.scss'],
})
export class MapaVisitantePage implements OnInit {
  public estadoQRClub: boolean = false;
  public estadoQRComplejo: boolean = false;
  public estadoQRParque: boolean = false;

  constructor(private modal: ModalController, private alert: AlertController) { 
    

  }

  ingresarClub(){
    console.log('ingreso por ingresarClub()');
    this.generarQRClub();

  }

  ingresarParque(){
    console.log('ingreso por ingresarParque()');
    this.generarQRParque();

  }

  ingresarComplejo(){
    console.log('ingreso por ingresarComplejo()');
    this.generarQRComplejo();

  }

  mostrarElQRGeneradoClub(){
    console.log('despues del modal');
    this.estadoQRClub = true;
    this.estadoQRComplejo = false;
    this.estadoQRParque = false;
  }

  mostrarElQRGeneradoComplejo(){
    console.log('despues del modal');
    this.estadoQRClub = false;
    this.estadoQRComplejo = true;
    this.estadoQRParque = false;
  }

  mostrarElQRGeneradoParque(){
    console.log('despues del modal');
    this.estadoQRClub = false;
    this.estadoQRComplejo = false;
    this.estadoQRParque = true;
  }

  async generarQRClub() {
    const alert = await this.alert.create({
      header: 'Estás por ingresar al club',
      subHeader: '¿Seguro qué deseas realizar esta acción?',
      //message: 'Estás por ingresar al club',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.mostrarElQRGeneradoClub();
        }
      },{
        text: "Cancelar",
        handler: (blah) => {

        }
      }]
    });

    await alert.present();
  }

  async generarQRParque() {
    const alert = await this.alert.create({
      header: 'Estás por ingresar al parque',
      subHeader: '¿Seguro qué deseas realizar esta acción?',
      //message: 'Estás por ingresar al club',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.mostrarElQRGeneradoParque();
        }
      },{
        text: "Cancelar",
        handler: (blah) => {

        }
      }]
    });

    await alert.present();
  }

  async generarQRComplejo() {
    const alert = await this.alert.create({
      header: 'Estás por ingresar al complejo',
      subHeader: '¿Seguro qué deseas realizar esta acción?',
      //message: 'Estás por ingresar al club',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.mostrarElQRGeneradoComplejo();
        }
      },{
        text: "Cancelar",
        handler: (blah) => {

        }
      }]
    });

    await alert.present();
  }

  ngOnInit() {
    
  }

}
