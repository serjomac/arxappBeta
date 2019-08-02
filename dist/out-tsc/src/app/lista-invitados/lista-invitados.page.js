import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AddInvitadoComponent } from '../componets/add-invitado/add-invitado.component';
import { AngularFireAuth } from '@angular/fire/auth';
var ListaInvitadosPage = /** @class */ (function () {
    function ListaInvitadosPage(dataBase, modal, auth) {
        this.dataBase = dataBase;
        this.modal = modal;
        this.auth = auth;
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
    ListaInvitadosPage.prototype.addInvitado = function () {
        this.modal.create({
            component: AddInvitadoComponent,
        }).then(function (modal) { return modal.present(); });
    };
    ListaInvitadosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.dataBase.collection('invitados').snapshotChanges().pipe(map(function (res) {
            _this.arrayInvitados = [];
            res.map(function (inv) {
                //console.log('el id_usuarioVisitante es: ', inv.payload.doc.data()['id_usuarioVisitante'])
                var invitado = inv.payload.doc.data();
                var usuarios = _this.dataBase.collection('users').snapshotChanges().pipe(map(function (res) {
                    res.map(function (usuario) {
                        var usuarioInvitado = usuario.payload.doc.data();
                        //console.log(usuarioInvitado);
                        if (invitado.id_usuarioVisitante == usuarioInvitado.uid) {
                            if (invitado.id_usuarioResidente == _this.auth.auth.currentUser.uid) {
                                console.log("el usuario invitado es: ", usuarioInvitado.name);
                                _this.arrayInvitados.push(usuarioInvitado);
                            }
                        }
                    });
                }));
                usuarios.forEach(function (users) {
                });
                /*
                usuarios.forEach(user => {
                  user.forEach(campo => {
                    if(invitado.id_usuarioVisitante == campo['uid']){
                      //const nombreInvitado = campo['name'];
                      //console.log('el usuario invitado es: ', nombreInvitado)
                      const usuarioInviatdo =
                    }
                  })
                })
                */
                //const i = inv.payload.doc.data() as Invitado;
                //this.arrayInvitados.push(i);
            });
        }));
        this.data.forEach(function (users) {
        });
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
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, ModalController, AngularFireAuth])
    ], ListaInvitadosPage);
    return ListaInvitadosPage;
}());
export { ListaInvitadosPage };
//# sourceMappingURL=lista-invitados.page.js.map