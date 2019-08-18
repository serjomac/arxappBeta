import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invitado } from '../../models/invitado';
import {formatDate} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServicioNotificacionService {

  selectUsuario: Invitado;
  //usuario: Invitado[];
  readonly URL_API = 'http://18.224.39.112:8098/webservice/administrador/';

  constructor(public http: HttpClient) { 
    //this.selectUsuario = new Invitado();
  }

  registrarNotificacionInvitado(selectUsuario: Invitado){
    var _Url = this.URL_API + "registrar";
    var fingreso = formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss', 'es');
 
    let ingresarInvitado: Invitado = {
      estado : true,
      invitacion_activa : true,
      fecha_ingreso : fingreso,
      fecha_salida: fingreso,
      id_usuarioResidente : selectUsuario.id_usuarioResidente,
      name : selectUsuario.name,
      lastName: selectUsuario.lastName,
      username : selectUsuario.username
    };

    return this.http.post(_Url, JSON.stringify(ingresarInvitado));
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
