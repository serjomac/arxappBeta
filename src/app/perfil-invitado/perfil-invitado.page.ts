import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListaInvitadosPage, UsuarioInvitado } from '../lista-invitados/lista-invitados.page';
import { MenuController } from '@ionic/angular';

import { from, Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario'
import { Invitado } from '../models/invitado'
import { Socket } from 'ngx-socket-io';
import { auth } from 'firebase';
import { UsuariosService } from '../servicios/usuarios.service';
import { InvitadoServiceService } from '../servicios/InvitadoServiceService';

@Component({
  selector: 'app-perfil-invitado',
  templateUrl: './perfil-invitado.page.html',
  styleUrls: ['./perfil-invitado.page.scss'],
})
export class PerfilInvitadoPage implements OnInit {
  public mostrarNotificacion: boolean = false; 
  public name: string;
  public idInvitado: string;
  public numVisitas: number = 0;
  public notificaiones = [];
  public invitacion_activa: boolean = false;
  public estadoInvitado: boolean = false;
  constructor(private router: Router, private actionSheetController: ActionSheetController, private auth: AuthService, private autFb: AngularFireAuth, private dataBase: AngularFirestore, public socketIO: Socket, public ngZone: NgZone, private usuarios: UsuariosService, private invitadoService: InvitadoServiceService, private alert: AlertController) {
    
    localStorage.setItem('objUsuarioEnSession', JSON.stringify(""));
    this.name = autFb.auth.currentUser.displayName;
    this.idInvitado = autFb.auth.currentUser.uid;
    //debugger
    this.getVisitante();
    this.getUsuario();
    //autFb.auth.currentUser.uid = this.idInvitado;
  }
 
  redirectIngresarCiudadela(){
    if(this.estadoInvitado ){
      this.router.navigate(["/mapa-visitante"]);
    }else{
      this.presentNoAcceso();
    }
    
  }
  
  
  async presentNoAcceso() {
    const alert = await this.alert.create({
      header: 'Acesso denegado',
      subHeader: 'Aún no está dentro de la urbanización',
      message: 'Debe tener el acceso en garita de Vicrieel.',
      buttons: [{
        text: "Aceptar",
        handler: (blah) => {
        }
      }]
    });

    await alert.present();
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
        //debugger
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
        //debugger
        if(campoInvitado['uid'] == this.idInvitado){
          this.idInvitado = campoInvitado['id_usuarioResidente'];
          let objInvitado = campoInvitado as Invitado;
          localStorage.setItem('objInvitadoEnSession', JSON.stringify(objInvitado));
          contador ++;
          this.numVisitas = contador;
          return;
        }
      });
      contador = 0;
    });
  }

  ngOnInit() {

    this.usuarios.getUsersRolInvitado(this.idInvitado).subscribe(res=> {
      
        let invitadoTmp: Usuario = res[0];
        console.log(invitadoTmp.uid)
        this.invitadoService.getInvitadoById(invitadoTmp["uid"]).subscribe(invitado => {
          if(invitado.length>0){
          console.log(invitado.length)
          this.invitacion_activa = invitado[0].invitacion_activa;
          this.numVisitas = invitado[0].numeroVisitas;
          this.estadoInvitado = invitado[0].estado;
        }
        })

      
    })

   

  }


  

}
