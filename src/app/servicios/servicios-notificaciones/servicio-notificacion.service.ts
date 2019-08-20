import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invitado } from '../../models/invitado';
import {formatDate} from '@angular/common';
import { Notificacion } from '../../models/notificacion';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class ServicioNotificacionService {

  selectUsuario: Invitado;
  //usuario: Invitado[];
  readonly URL_API = 'https://arxappws.herokuapp.com/notificaciones/create';

  constructor(public http: HttpClient, private socket: Socket) { 
    //this.selectUsuario = new Invitado();
  }

  registrarNotificacionInvitado(notificacion: Notificacion){
 
    let ingresarInvitado: Notificacion = {
      estado : true,
      invitacion_activa : true,
      fecha_ingreso : new Date,
      fecha_salida: new Date,
      id_residente : notificacion.id_residente,
      id_visitante: notificacion.id_visitante,
      name : notificacion.name,
      lastname: notificacion.lastname,
      username : notificacion.username
    };

    this.http.post(this.URL_API, ingresarInvitado);
  }

  consultarNotificacionInvitado(idResidente: string){
    var _Url = this.URL_API + "consultar";

    let consultarInvitado = {
      id_usuarioResidente : idResidente,
    }; 

    return this.http.post(_Url, JSON.stringify(consultarInvitado));
  }

  actualizarNotificacionInvitado(idResidenteUpdate: string){
    var _Url = this.URL_API + "actualizar";

    let actualizarInvitado = {
      id : idResidenteUpdate,
    };

    return this.http.post(_Url, JSON.stringify(actualizarInvitado));
  }

}
