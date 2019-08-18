import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { from, UnsubscriptionError } from 'rxjs';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InvitadoServiceService } from '../../servicios/InvitadoServiceService';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Invitado } from '../../models/invitado';

@Component({
  selector: 'app-auth-ingresar-ciudadela',
  templateUrl: './auth-ingresar-ciudadela.component.html',
  styleUrls: ['./auth-ingresar-ciudadela.component.scss'],
})
export class AuthIngresarCiudadelaComponent implements OnInit {

  constructor(private dataBase: AngularFirestore, private auth: AngularFireAuth, private modal: ModalController, private alert: AlertController, private navParam: NavParams, private servicioInvitado: InvitadoServiceService, private servicioUsuarios: UsuariosService) { 
  
  }

  closeChat(){
    this.modal.dismiss();
    
  }
  
  ngOnInit() {}

}
