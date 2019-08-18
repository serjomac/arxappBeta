import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var InvitadoServiceService = /** @class */ (function () {
    function InvitadoServiceService(dataBse) {
        this.dataBse = dataBse;
    }
    InvitadoServiceService.prototype.getInvitados = function () {
        return this.dataBse.collection('invitados').snapshotChanges().pipe(map(function (invitado) {
            return invitado.map(function (data) {
                var invitadoTmp = data.payload.doc.data();
                invitadoTmp.id = data.payload.doc.id;
                //console.log(invitadoTmp);
                return invitadoTmp;
            });
        }));
    };
    InvitadoServiceService.prototype.addInvitado = function (invitado) {
        alert('el invitado se ingreso correctamente');
        return this.dataBse.collection('invitados').add(invitado);
    };
    InvitadoServiceService.prototype.getInvitadoByIdResidente = function (id_Residente) {
        return this.dataBse.collection('invitados', function (ref) { return ref.where('id_usuarioResidente', '==', id_Residente); }).snapshotChanges().pipe(map(function (inv) {
            return inv.map(function (data) {
                var invi = data.payload.doc.data();
                invi.id = data.payload.doc.id;
                return invi;
            });
        }));
    };
    InvitadoServiceService.prototype.getInvitadoEstadoTrueByIdResidente = function (id_Residente) {
        return this.dataBse.collection('invitados', function (ref) { return ref.where('id_usuarioResidente', '==', id_Residente).where("invitacion_activa", "==", true); }).snapshotChanges().pipe(map(function (inv) {
            return inv.map(function (data) {
                var invi = data.payload.doc.data();
                invi.id = data.payload.doc.id;
                return invi;
            });
        }));
    };
    InvitadoServiceService.prototype.updateEstoInvitado = function (idInvitado, estado) {
        return this.dataBse.collection('invitados').doc(idInvitado).update({
            invitacion_activa: estado
        });
    };
    InvitadoServiceService.prototype.getInvitadoById = function (idVisitante) {
        return this.dataBse.collection('invitados').doc(idVisitante).snapshotChanges().pipe(map(function (res) {
            var invitadoTmp = res.payload.data();
            return invitadoTmp;
        }));
    };
    InvitadoServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], InvitadoServiceService);
    return InvitadoServiceService;
}());
export { InvitadoServiceService };
//# sourceMappingURL=InvitadoServiceService.js.map