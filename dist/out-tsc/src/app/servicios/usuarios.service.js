import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var UsuariosService = /** @class */ (function () {
    function UsuariosService(dataBase) {
        this.dataBase = dataBase;
    }
    UsuariosService.prototype.getAllUsers = function () {
        return this.dataBase.collection('users').snapshotChanges().pipe(map(function (users) {
            return users.map(function (res) {
                var user = res.payload.doc.data();
                return user;
            });
        }));
    };
    UsuariosService.prototype.getUsersRolInvitado = function (idUsuarioVisitante) {
        return this.dataBase.collection('users', function (ref) { return ref.where("rol", "==", "visitante").where("uid", "==", idUsuarioVisitante); }).snapshotChanges().pipe(map(function (res) {
            return res.map(function (usuarioInvitado) {
                var usuarioTmp = usuarioInvitado.payload.doc.data();
                return usuarioTmp;
            });
        }));
    };
    UsuariosService.prototype.getuserInvitadoByUsername = function (username) {
        return this.dataBase.collection('users', function (ref) { return ref.where("username", "==", username); }).snapshotChanges().pipe(map(function (res) {
            return res.map(function (data) {
                var userTmp = data.payload.doc.data();
                if (userTmp.rol == "visitante") {
                    return userTmp;
                }
                else {
                    return {
                        mensaje: "Elusuario ingresado no es visitante"
                    };
                }
            });
        }));
    };
    UsuariosService.prototype.getAllUserResidentes = function () {
        return this.dataBase.collection('users', function (ref) { return ref.where("rol", "==", "residente"); }).snapshotChanges().pipe(map(function (res) {
            return res.map(function (data) {
                var userTmp = data.payload.doc.data();
                return userTmp;
            });
        }));
    };
    UsuariosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], UsuariosService);
    return UsuariosService;
}());
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map