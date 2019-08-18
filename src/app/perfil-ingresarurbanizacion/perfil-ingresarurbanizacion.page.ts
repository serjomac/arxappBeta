import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListaInvitadosPage, UsuarioInvitado } from '../lista-invitados/lista-invitados.page';
import { MenuController } from '@ionic/angular';

import { from } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Invitado } from '../models/invitado';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { AuthIngresarCiudadelaComponent } from '../componets/auth-ingresar-ciudadela/auth-ingresar-ciudadela.component';

@Component({
  selector: 'app-perfil-ingresarurbanizacion',
  templateUrl: './perfil-ingresarurbanizacion.page.html',
  styleUrls: ['./perfil-ingresarurbanizacion.page.scss'],
})
export class PerfilIngresarurbanizacionPage implements OnInit {
  public nameVisitante: string;
  public nameResidente: string;
  //public objInvitado: Invitado;
  //public objUsuario: Usuario;

  constructor(private router: Router, private modal: ModalController, private actionSheetController: ActionSheetController, private auth: AuthService, private autFb: AngularFireAuth, private dataBase: AngularFirestore) {
    debugger
    var objUsuario = JSON.parse(localStorage.getItem('objUsuarioEnSession'));
    //var objInvitado = JSON.parse(localStorage.getItem('objInvitadoEnSession'));
    this.nameVisitante = autFb.auth.currentUser.displayName; //objInvitado.id_usuarioResidente;

    if (objUsuario != null && objUsuario != ""){
      this.nameResidente = objUsuario.name;
    }else{
      this.nameResidente = "N/A";
    }

  }

  ingresarCiudadela(){
    this.modal.create({
      component:AuthIngresarCiudadelaComponent,
      componentProps: {
      }
    }).then((modal) =>modal.present())
  }


  ngOnInit() {
  }

}
