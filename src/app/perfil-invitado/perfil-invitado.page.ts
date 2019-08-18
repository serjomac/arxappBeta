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
import { Usuario } from '../models/usuario'
import { Invitado } from '../models/invitado'

@Component({
  selector: 'app-perfil-invitado',
  templateUrl: './perfil-invitado.page.html',
  styleUrls: ['./perfil-invitado.page.scss'],
})
export class PerfilInvitadoPage implements OnInit {
  public name: string;
  public idInvitado: string;
  public numVisitas: string = '0';

  constructor(private router: Router, private actionSheetController: ActionSheetController, private auth: AuthService, private autFb: AngularFireAuth, private dataBase: AngularFirestore) {
    
    localStorage.setItem('objUsuarioEnSession', JSON.stringify(""));
    this.name = autFb.auth.currentUser.displayName;
    this.idInvitado = autFb.auth.currentUser.uid;
    debugger
    this.getVisitante();
    this.getUsuario();
    //autFb.auth.currentUser.uid = this.idInvitado;
  }
 
  redirectIngresarCiudadela(){
    this.router.navigate(["/perfil-ingresarurbanizacion"])
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

  getUsuario(){
    var listaUsuario = this.dataBase.collection('users').valueChanges();
    listaUsuario.forEach(usuario => {
      usuario.forEach(campoUsuario => {
        //console.log(campoInvitado['id_usuarioVisitante'])
        debugger
        if(campoUsuario['uid'] == this.idInvitado && campoUsuario['rol'] == "residente"){
          
          let objUsuario = campoUsuario as Usuario;
          localStorage.setItem('objUsuarioEnSession', JSON.stringify(objUsuario));
          return;
        }
      });
    });
  }

  getVisitante(){
    var contador: number = 0;

    var listaInvitados = this.dataBase.collection('invitados').valueChanges();
    listaInvitados.forEach(invitado => {
      invitado.forEach(campoInvitado => {
        //console.log(campoInvitado['id_usuarioVisitante'])
        debugger
        if(campoInvitado['uid'] == this.idInvitado){
          this.idInvitado = campoInvitado['id_usuarioResidente'];
          let objInvitado = campoInvitado as Invitado;
          localStorage.setItem('objInvitadoEnSession', JSON.stringify(objInvitado));
          contador ++;
          this.numVisitas = ""+contador;
          return;
        }
      });
      contador = 0;
    });
  }

  ngOnInit() {
  }

}
