import { Component, OnInit } from '@angular/core';


import { ModalController, AlertController, NavParams, LoadingController } from '@ionic/angular';
import { AuthIngresarCiudadelaComponent } from '../componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component';



@Component({
  selector: 'app-mapa-visitante',
  templateUrl: './mapa-visitante.page.html',
  styleUrls: ['./mapa-visitante.page.scss'],
})
export class MapaVisitantePage implements OnInit {
  public estadoQRClub: boolean = false;
  public estadoQRComplejo: boolean = false;
  public estadoQRParque: boolean = false;

  constructor(private modal: ModalController, private alert: AlertController, private loading: LoadingController) { 
    

  }

  ingresarClub(){
    console.log('ingreso por ingresarClub()');
    this.generarQRClub();

  }




  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Cargando...',
      duration: 1800
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.mostrarElQRGeneradoClub();
  }

  async presentLoading2() {
    const loading = await this.loading.create({
      message: 'Cargando...',
      duration: 1800
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.mostrarElQRGeneradoComplejo();
  }

  async presentLoading3() {
    const loading = await this.loading.create({
      message: 'Cargando...',
      duration: 1800
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.mostrarElQRGeneradoParque();
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

  ocultarQr(){
    this.estadoQRClub = false;
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
          this.presentLoading();
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
      header: 'Estás por ingresar al gimnasio',
      subHeader: '¿Seguro qué deseas realizar esta acción?',
      //message: 'Estás por ingresar al club',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.presentLoading3();        }
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
      header: 'Estás por ingresar al parque',
      subHeader: '¿Seguro qué deseas realizar esta acción?',
      //message: 'Estás por ingresar al club',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
          this.presentLoading2();
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
