import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ModalController, AlertController } from '@ionic/angular';
var AddInvitadoComponent = /** @class */ (function () {
    function AddInvitadoComponent(dataBase, auth, modal, alert) {
        this.dataBase = dataBase;
        this.auth = auth;
        this.modal = modal;
        this.alert = alert;
        this.visitanteIngresado = '';
        this.usuarioEncontrado = false;
        this.keepGoing = true;
    }
    AddInvitadoComponent.prototype.ngOnInit = function () { };
    AddInvitadoComponent.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            subHeader: 'Usuario no valido',
                            message: 'El usuario ingresado no existe',
                            buttons: [{
                                    text: "Aceptar",
                                    handler: function (blah) {
                                        _this.visitanteIngresado = '';
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddInvitadoComponent.prototype.presentAlert2 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            subHeader: 'Campo vacio',
                            message: 'Debe ingresar un usuario',
                            buttons: [{
                                    text: "Aceptar",
                                    handler: function (blah) {
                                        _this.visitanteIngresado = '';
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddInvitadoComponent.prototype.addInvitado = function () {
        var _this = this;
        this.keepGoing = true;
        if (this.visitanteIngresado != "") {
            /*
            
              this.usuarios = this.dataBase.collection('users').snapshotChanges().pipe(map(user => {
                user.map(dato => {
                  console.log("===>",dato.payload.doc.data()['name']);
                  if(this.visitanteIngresado == dato.payload.doc.data()['name']){
                    if(dato.payload.doc.data()['rol'] == "visitante"){
                      this.usuarioEncontrado = true;
                      this.dataBase.collection('invitados').add({
                        id_usuarioResidente: this.auth.auth.currentUser.uid,
                        id_usuarioVisitante: dato.payload.doc.data()['uid'],
                        fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                        fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                        estado: false
                        
                      });
                      this.closeChat();
                    }
                  }
                });
              }));
                */
            console.log("===>");
            this.usuarios = this.dataBase.collection('users').valueChanges();
            this.usuarios.forEach(function (user) {
                //console.log(user);
                user.forEach(function (res) {
                    if (_this.keepGoing) {
                        //console.log(res);
                        if (_this.visitanteIngresado == res["name"]) {
                            if (res['rol'] == 'visitante') {
                                _this.dataBase.collection('invitados').add({
                                    id_usuarioResidente: _this.auth.auth.currentUser.uid,
                                    id_usuarioVisitante: res['uid'],
                                    fecha_ingreso: firebase.firestore.FieldValue.serverTimestamp(),
                                    fecha_salida: firebase.firestore.FieldValue.serverTimestamp(),
                                    estado: false
                                });
                                _this.keepGoing = false;
                                _this.usuarioEncontrado = true;
                                _this.closeChat();
                            }
                        }
                    }
                });
            });
        }
        else {
            this.presentAlert2();
        }
    };
    AddInvitadoComponent.prototype.closeChat = function () {
        this.modal.dismiss();
    };
    AddInvitadoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-invitado',
            templateUrl: './add-invitado.component.html',
            styleUrls: ['./add-invitado.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireAuth, ModalController, AlertController])
    ], AddInvitadoComponent);
    return AddInvitadoComponent;
}());
export { AddInvitadoComponent };
//# sourceMappingURL=add-invitado.component.js.map