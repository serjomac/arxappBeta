import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { InvitadoServiceService } from '../servicios/InvitadoServiceService';
import { UsuariosService } from '../servicios/usuarios.service';
var ListaInvitadosPage = /** @class */ (function () {
    //public invitadoTmp: Invitado;
    function ListaInvitadosPage(dataBase, modal, auth, servicioInvitados, servicioUsuario) {
        this.dataBase = dataBase;
        this.modal = modal;
        this.auth = auth;
        this.servicioInvitados = servicioInvitados;
        this.servicioUsuario = servicioUsuario;
        this.arrayInvitados = [];
        this.listaDeInvitados = [];
    }
    ListaInvitadosPage.prototype.loadData = function (event) {
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
    ListaInvitadosPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    ListaInvitadosPage.prototype.addInvitado = function (listaInvitados) {
        this.modal.create({
            component: AddInvitadoComponent,
            componentProps: {
                listaInvitados: listaInvitados,
            }
        }).then(function (modal) { return modal.present(); });
    };
    ListaInvitadosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioInvitados.getInvitadoEstadoTrueByIdResidente(this.auth.auth.currentUser.uid).subscribe(function (res) {
            console.log(res);
            _this.arrayInvitados = res;
        });
    };
    ListaInvitadosPage.prototype.eliminarInvitadoDeLista = function (invitado) {
        //console.log(invitado.uid)
        console.log('se va a cambiar el estdo del invitado: ', invitado.id);
        this.servicioInvitados.updateEstoInvitado(invitado.id, false);
    };
    tslib_1.__decorate([
        ViewChild(IonInfiniteScroll),
        tslib_1.__metadata("design:type", IonInfiniteScroll)
    ], ListaInvitadosPage.prototype, "infiniteScroll", void 0);
    ListaInvitadosPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-invitados',
            templateUrl: './lista-invitados.page.html',
            styleUrls: ['./lista-invitados.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, ModalController, AngularFireAuth, InvitadoServiceService, UsuariosService])
    ], ListaInvitadosPage);
    return ListaInvitadosPage;
}());
export { ListaInvitadosPage };
//# sourceMappingURL=lista-invitados.page.js.map