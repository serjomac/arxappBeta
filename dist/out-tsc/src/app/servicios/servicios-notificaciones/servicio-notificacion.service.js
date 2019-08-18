import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
var ServicioNotificacionService = /** @class */ (function () {
    function ServicioNotificacionService(http) {
        this.http = http;
        //usuario: Invitado[];
        this.URL_API = 'http://18.224.39.112:8098/webservice/administrador/';
        //this.selectUsuario = new Invitado();
    }
    ServicioNotificacionService.prototype.registrarNotificacionInvitado = function (selectUsuario) {
        var _Url = this.URL_API + "registrar";
        var fingreso = formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss', 'es');
        var ingresarInvitado = {
            estado: true,
            invitacion_activa: true,
            fecha_ingreso: fingreso,
            fecha_salida: fingreso,
            id_usuarioResidente: selectUsuario.id_usuarioResidente,
            name: selectUsuario.name,
            lastName: selectUsuario.lastName,
            username: selectUsuario.username
        };
        return this.http.post(_Url, JSON.stringify(ingresarInvitado));
    };
    ServicioNotificacionService.prototype.consultarNotificacionInvitado = function (idResidente) {
        var _Url = this.URL_API + "consultar";
        var consultarInvitado = {
            id_usuarioResidente: idResidente,
        };
        return this.http.post(_Url, JSON.stringify(consultarInvitado));
    };
    ServicioNotificacionService.prototype.actualizarNotificacionInvitado = function (idResidenteUpdate) {
        var _Url = this.URL_API + "actualizar";
        var actualizarInvitado = {
            id: idResidenteUpdate,
        };
        return this.http.post(_Url, JSON.stringify(actualizarInvitado));
    };
    ServicioNotificacionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ServicioNotificacionService);
    return ServicioNotificacionService;
}());
export { ServicioNotificacionService };
//# sourceMappingURL=servicio-notificacion.service.js.map