import { Component } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListaInvitadosPage } from '../lista-invitados/lista-invitados.page';
import { MenuController } from '@ionic/angular';

import { from } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name: string;
  public numeroInvitadosTotal: string = '0';
  constructor(private router: Router, private actionSheetController: ActionSheetController, private auth: AuthService, private autFb: AngularFireAuth, private dataBase: AngularFirestore) {
    
    var contador: number = 0;
    this.name = autFb.auth.currentUser.displayName;

    var listaInvitados = this.dataBase.collection('invitados').valueChanges();
    listaInvitados.forEach(invitado => {
      invitado.forEach(campoInvitado => {
        //console.log(campoInvitado['id_usuarioVisitante'])
        if(campoInvitado['id_usuarioResidente'] == this.autFb.auth.currentUser.uid){
          
          contador ++;
          this.numeroInvitadosTotal = ""+contador;
          
        }
      });
      contador = 0;
    });
    
    
    
  }
 
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Cerrar sesion',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.auth.logOut();
        }
      }
      ]
    });
    await actionSheet.present();
  }

}


