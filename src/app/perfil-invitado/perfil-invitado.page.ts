import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
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

@Component({
  selector: 'app-perfil-invitado',
  templateUrl: './perfil-invitado.page.html',
  styleUrls: ['./perfil-invitado.page.scss'],
})
export class PerfilInvitadoPage implements OnInit {
  public mostrarNotificacion: boolean = false; 
  public name: string;
  public idInvitado: string;
  public numVisitas: string = '0';
  public notificaiones = [];
  constructor(private router: Router, private actionSheetController: ActionSheetController, private auth: AuthService, private autFb: AngularFireAuth, private dataBase: AngularFirestore, public socketIO: Socket, public ngZone: NgZone) {
    
    localStorage.setItem('objUsuarioEnSession', JSON.stringify(""));
    this.name = autFb.auth.currentUser.displayName;
    this.idInvitado = autFb.auth.currentUser.uid;
    //debugger
    this.getVisitante();
    this.getUsuario();
    //autFb.auth.currentUser.uid = this.idInvitado;
  }
 
  redirectIngresarCiudadela(){
    this.router.navigate(["/perfil-ingresarurbanizacion"]);
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
          this.numVisitas = ""+contador;
          return;
        }
      });
      contador = 0;
    });
  }

  ngOnInit() {
    this.socketIO.connect()
    this.getNoti().subscribe(noti => {
      this.notificaiones = []
      this.mostrarNotificacion = false;
      this.notificaiones.push(noti)
      localStorage.setItem("notificaciones", JSON.stringify(this.notificaiones));
      
      for (let i = 0; i < this.notificaiones.length; i++) {
        //debugger
        if(this.notificaiones[i].id_visitante != this.autFb.auth.currentUser.uid){

          console.log("se enviaro pero no te pertenece la notificacion")
        }else if(this.notificaiones[i].invitacion_activa == true){   
          this.mostrarNotificacion = true;
          console.log(this.notificaiones[i]);
          break;
        }
        
      }
      
    })
  }


  getNoti(){
    let observable = new Observable(observer => {
      this.socketIO.on("notificacion", data => {
        observer.next(data);
      })
    })
    return observable;
  }
  connect(){
    let isAvailable: boolean;
    let isWaitng: boolean
    this.socketIO.on("result", (result)=>{

      this.ngZone.run(() => {
        isAvailable=true;
        isWaitng=false;
        let data:any=result
        console.log("result")
        console.log(result)
         
      });
    })
  }

}
