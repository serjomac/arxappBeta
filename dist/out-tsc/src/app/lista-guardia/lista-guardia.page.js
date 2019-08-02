import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
var ListaGuardiaPage = /** @class */ (function () {
    function ListaGuardiaPage(dataBase, router, auth) {
        this.dataBase = dataBase;
        this.router = router;
        this.auth = auth;
        this.arrayInvitados = [];
        this.listaDelGuardia = [];
    }
    ListaGuardiaPage.prototype.loadData = function (event) {
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
    ListaGuardiaPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    ListaGuardiaPage.prototype.listaInvitadoPorResidente = function () {
        this.router.navigate(['../listainvitados']);
    };
    ListaGuardiaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.arrayInvitados = [];
        this.listaDelGuardia = [];
        this.data = this.dataBase.collection('invitados').snapshotChanges().pipe(map(function (res) {
            res.map(function (inv) {
                //console.log('el id_usuarioVisitante es: ', inv.payload.doc.data()['id_usuarioVisitante'])
                //console.log('el id_usuarioVisitante es: ', inv.payload.doc.data())
                var invitado = inv.payload.doc.data();
                var usuarios = _this.dataBase.collection('users').snapshotChanges().pipe(map(function (res) {
                    res.map(function (usuario) {
                        var usuarioResidente = usuario.payload.doc.data();
                        if (usuarioResidente.rol == "residente") {
                            _this.listaDelGuardia.push(usuarioResidente); //Obtengo lista de los residentes
                            console.log(usuarioResidente);
                            if (usuarioResidente.uid == invitado.id_usuarioVisitante) {
                                if (invitado.id_usuarioResidente == _this.auth.auth.currentUser.uid) {
                                    _this.arrayInvitados.push(invitado); //Obtengo lista de visitantes por residente
                                    console.log(usuarioResidente);
                                }
                            }
                        }
                    });
                }));
            });
        }));
    };
    tslib_1.__decorate([
        ViewChild(IonInfiniteScroll),
        tslib_1.__metadata("design:type", IonInfiniteScroll)
    ], ListaGuardiaPage.prototype, "infiniteScroll", void 0);
    ListaGuardiaPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-guardia',
            templateUrl: './lista-guardia.page.html',
            styleUrls: ['./lista-guardia.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, Router, AngularFireAuth])
    ], ListaGuardiaPage);
    return ListaGuardiaPage;
}());
export { ListaGuardiaPage };
//# sourceMappingURL=lista-guardia.page.js.map