import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
var ListaGuardiaPage = /** @class */ (function () {
    function ListaGuardiaPage(dataBase, router, auth, servicioUsuario) {
        this.dataBase = dataBase;
        this.router = router;
        this.auth = auth;
        this.servicioUsuario = servicioUsuario;
        this.arrayInvitados = [];
        this.listaDelGuardia = [];
    }
    ListaGuardiaPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            //console.log(event);
            var dataTmp = [];
            //this.data = dataTmp;
            console.log("veamos que tiene data: ", _this.listaDelGuardia[0]);
            event.target.complete();
            if (_this.data.length > 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    ListaGuardiaPage.prototype.listIncitados = function (idResidente) {
        localStorage.setItem('idResidente', idResidente.uid);
        console.log(localStorage.getItem("idResidente"));
        this.router.navigate(["/lista-invitados-guardia"]);
    };
    ListaGuardiaPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    ListaGuardiaPage.prototype.listaInvitadoPorResidente = function () {
    };
    ListaGuardiaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioUsuario.getAllUserResidentes().subscribe(function (res) {
            _this.listaDelGuardia = res;
            console.log(_this.listaDelGuardia);
        });
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
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, Router, AngularFireAuth, UsuariosService])
    ], ListaGuardiaPage);
    return ListaGuardiaPage;
}());
export { ListaGuardiaPage };
//# sourceMappingURL=lista-guardia.page.js.map