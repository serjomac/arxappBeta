import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { InvitadoServiceService } from '../servicios/InvitadoServiceService';
import { UsuariosService } from '../servicios/usuarios.service';
var ListaInvitadosGuardiaPage = /** @class */ (function () {
    function ListaInvitadosGuardiaPage(dataBase, modal, auth, servicioInvitados, servicioUsuario) {
        this.dataBase = dataBase;
        this.modal = modal;
        this.auth = auth;
        this.servicioInvitados = servicioInvitados;
        this.servicioUsuario = servicioUsuario;
        this.arrayInvitados = [];
        this.listaDeInvitados = [];
    }
    ListaInvitadosGuardiaPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            //console.log(event);
            var dataTmp = [];
            //this.data = dataTmp;
            //console.log("veamos que tiene data: ", this.listaDeInvitados[1]);
            event.target.complete();
            if (_this.data.length > 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    ListaInvitadosGuardiaPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    ListaInvitadosGuardiaPage.prototype.addInvitado = function (listaInvitados) {
        this.modal.create({
            component: AddInvitadoComponent,
            componentProps: {
                listaInvitados: listaInvitados,
            }
        }).then(function (modal) { return modal.present(); });
    };
    ListaInvitadosGuardiaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioInvitados.getInvitadoEstadoTrueByIdResidente(localStorage.getItem("idResidente")).subscribe(function (res) {
            console.log(res);
            _this.arrayInvitados = res;
        });
    };
    ListaInvitadosGuardiaPage.prototype.eliminarInvitadoDeLista = function (invitado) {
        //console.log(invitado.uid)
        console.log('se va a cambiar el estdo del invitado: ', invitado.id);
        this.servicioInvitados.updateEstoInvitado(invitado.id, false);
    };
    tslib_1.__decorate([
        ViewChild(IonInfiniteScroll),
        tslib_1.__metadata("design:type", IonInfiniteScroll)
    ], ListaInvitadosGuardiaPage.prototype, "infiniteScroll", void 0);
    ListaInvitadosGuardiaPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-invitados-guardia',
            templateUrl: './lista-invitados-guardia.page.html',
            styleUrls: ['./lista-invitados-guardia.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, ModalController, AngularFireAuth, InvitadoServiceService, UsuariosService])
    ], ListaInvitadosGuardiaPage);
    return ListaInvitadosGuardiaPage;
}());
export { ListaInvitadosGuardiaPage };
//# sourceMappingURL=lista-invitados-guardia.page.js.map