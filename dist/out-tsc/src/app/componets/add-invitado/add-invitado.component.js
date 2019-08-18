import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { InvitadoServiceService } from '../../servicios/InvitadoServiceService';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ServicioNotificacionService } from '../../servicios/servicios-notificaciones/servicio-notificacion.service';
var AddInvitadoComponent = /** @class */ (function () {
    function AddInvitadoComponent(dataBase, auth, modal, alert, navParam, servicioInvitado, servicioUsuarios, serviceNotificion) {
        this.dataBase = dataBase;
        this.auth = auth;
        this.modal = modal;
        this.alert = alert;
        this.navParam = navParam;
        this.servicioInvitado = servicioInvitado;
        this.servicioUsuarios = servicioUsuarios;
        this.serviceNotificion = serviceNotificion;
        this.visitanteIngresado = '';
        this.usuarioEncontrado = false;
        this.keepGoing = true;
        this.usuarioYaExiste = false;
        this.usuarioYaEstaInvitado = false;
        this.invitados = [];
        this.users = [];
        this.usuariosInvitadosAgregados = [];
    }
    AddInvitadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listaInvitados = this.navParam.get('listaInvitados');
        //console.log(this.listaInvitados.length);
        //console.log(this.addInvitado);
        for (var i = 0; i < this.listaInvitados.length; i++) {
            //console.log(this.listaInvitados[i].name)
            //console.log(this.listaInvitados[i].uid)
        }
        this.servicioInvitado.getInvitados().subscribe(function (res) {
            //this.invitados = res;
            //console.log(this.invitados);
        });
        this.servicioUsuarios.getAllUsers().subscribe(function (res) {
            _this.users = res;
        });
        this.servicioInvitado.getInvitadoByIdResidente(this.auth.auth.currentUser.uid).subscribe(function (invitados) {
            _this.usuariosInvitadosAgregados = [];
            _this.invitados = invitados;
            //console.log(this.invitados);
            for (var i = 0; i < _this.invitados.length; i++) {
                console.log(_this.invitados[i].id);
                _this.servicioUsuarios.getUsersRolInvitado(_this.invitados[i].id_usuarioVisitante).subscribe(function (res) {
                    res.forEach(function (data) {
                        _this.usuariosInvitadosAgregados.push(data);
                        //console.log(this.usuariosInvitadosAgregados)
                    });
                });
            }
        });
    };
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
    AddInvitadoComponent.prototype.presentAlert3 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            subHeader: 'Usuario Repetido',
                            message: 'El usuario ya esta en lista',
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
        var arrayInvitadosTemporal = [];
        var existeUsuario = false;
        //console.log('===>',this.invitados.length);
        //console.log('===>',this.users.length);
        this.keepGoing = true;
        //console.log("===>", this.usuariosInvitadosAgregados.length);
        //console.log("===>", this.invitados.length);
        var b = this.servicioUsuarios.getuserInvitadoByUsername(this.visitanteIngresado).subscribe(function (users) {
            if (users.length > 0) {
                if (!users[0]['mensaje']) {
                    console.log(_this.auth.auth.currentUser.uid);
                    var a_1 = _this.servicioInvitado.getInvitadoByIdResidente(_this.auth.auth.currentUser.uid).subscribe(function (res) {
                        //console.log(res)
                        if (res) {
                            if (res.length > 0) {
                                res.forEach(function (data) {
                                    console.log("Invitados" + data.invitacion_activa);
                                    //console.log(data)
                                    if (data.username == _this.visitanteIngresado && data.invitacion_activa == false) {
                                        console.log('se va a cambiar el estado del invitado: ', data.id);
                                        _this.servicioInvitado.updateEstoInvitado(data.id, true);
                                        _this.visitanteIngresado = "";
                                        a_1.unsubscribe();
                                    }
                                    else if (data.username == _this.visitanteIngresado && data.invitacion_activa == true) {
                                        console.log('el usuario ya esta invitado');
                                    }
                                    else if (data.username == _this.visitanteIngresado) {
                                        console.log('se va agregar el usuario');
                                        var invitadoTmp = {
                                            estado: false,
                                            invitacion_activa: true,
                                            fecha_ingreso: null,
                                            fecha_salida: null,
                                            id_usuarioResidente: _this.auth.auth.currentUser.uid,
                                            name: users[0].name,
                                            lastName: users[0].lastName,
                                            username: users[0].username
                                        };
                                        _this.servicioInvitado.addInvitado(invitadoTmp);
                                        _this.serviceNotificion.registrarNotificacionInvitado(invitadoTmp).subscribe(function (res) {
                                            console.log(res);
                                        });
                                        a_1.unsubscribe();
                                    }
                                });
                            }
                            else {
                                _this.servicioUsuarios.getuserInvitadoByUsername(_this.visitanteIngresado).subscribe(function (res) {
                                    if (res) {
                                        var invitadoTmp = {
                                            estado: false,
                                            invitacion_activa: true,
                                            fecha_ingreso: null,
                                            fecha_salida: null,
                                            id_usuarioResidente: _this.auth.auth.currentUser.uid,
                                            name: users[0].name,
                                            lastName: users[0].lastName,
                                            username: users[0].username
                                        };
                                        console.log('se va a guardar de una');
                                        _this.servicioInvitado.addInvitado(invitadoTmp);
                                        a_1.unsubscribe();
                                    }
                                    else {
                                        console.log('no existe ese invitado');
                                    }
                                });
                            }
                        }
                        else {
                            console.log("el usuario no tiene visitantes");
                        }
                    }, function (err) {
                        console.log("el ", err);
                    });
                }
                else {
                    console.log("el usuario ingresao no es visitante");
                }
            }
            else {
                console.log("el usuario no existe");
            }
        }, function (err) {
            console.log("No esta registrdo el invitado", err);
        });
        if (this.visitanteIngresado != "") {
            ////*******METODO QUE FUNCIONA ACTUALMENTE******///
            //console.log("===>");
            /*
            for (let i = 0; i < this.usuariosInvitadosAgregados.length; i++) {
              
              //console.log("===>", this.usuariosInvitadosAgregados[i])
             
              if(this.visitanteIngresado == this.usuariosInvitadosAgregados[i].username){
                
                  this.servicioInvitado.getInvitadoById(this.invitados[i].id).subscribe(res => {
                    if(res.invitacion_activa == true){
                      console.log('el usuario ya esta invitado')
                      
                    }else{
                      this.servicioInvitado.updateEstoInvitado(this.invitados[i].id);
                    }
                    //console.log("******>", res);
                  })
                  this.usuarioYaExiste = true;
                  break;
              }else{
                
                this.usuarioYaExiste = false;
              }
              
              
            }
            */
            /*
            if(!this.usuarioYaExiste){
              var idVisitanteIngresado: string;
              var invitadoTmp: Invitado;
              this.servicioUsuarios.getuserByUsername(this.visitanteIngresado).subscribe(res => {
                res.forEach(user => {
                  idVisitanteIngresado = user.uid;
                  console.log(idVisitanteIngresado);
                    invitadoTmp = {
                    estado: false,
                    invitacion_activa: true,
                    fecha_ingreso: null,
                    fecha_salida:null,
                    id_usuarioResidente: this.auth.auth.currentUser.uid,
                    id_usuarioVisitante: idVisitanteIngresado,
                    
                  }
                });
                this.servicioInvitado.addInvitado(invitadoTmp);
                
              })
    
              
              //
            }
            */
            /*
            for (let i = 0; i < this.users.length; i++) {
              if(this.visitanteIngresado == this.users[i].username && this.users[i].rol == 'visitante'){
    
                var idVisitanteIngresado = this.users[i].uid;
    
                //debugger
                if(this.listaInvitados.length > 0){
                for (let j = 0; j < this.listaInvitados.length; j++) {
                      
                      if(idVisitanteIngresado == this.listaInvitados[j].uid){
                        existeUsuario = true;
                        
                        break;
                      }else{
                        this.objetoInvitado = {
                          estado: false,
                          invitacion_activa: true,
                          fecha_ingreso: null,
                          fecha_salida: null,
                          id_usuarioResidente: this.auth.auth.currentUser.uid,
                          id_usuarioVisitante: idVisitanteIngresado
                        }
                        
                      }
         
                  }
                }else{
                  this.objetoInvitado = {
                    estado: false,
                    invitacion_activa: true,
                    fecha_ingreso: null,
                    fecha_salida: null,
                    id_usuarioResidente: this.auth.auth.currentUser.uid,
                    id_usuarioVisitante: idVisitanteIngresado
                  }
                  
                }
                
                if(existeUsuario){
                  console.log('el usuario ya esta invitado');
                  alert('El usuario que ingreso ya esta invitado');
                  this.visitanteIngresado = "";
                  break;
                  
                }else{
                  console.log('No esta invitado aun');
                  console.log(this.objetoInvitado);
                  this.servicioInvitado.addInvitado(this.objetoInvitado);
                  
                }
              }
              
            }
            */
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
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireAuth, ModalController, AlertController, NavParams, InvitadoServiceService, UsuariosService, ServicioNotificacionService])
    ], AddInvitadoComponent);
    return AddInvitadoComponent;
}());
export { AddInvitadoComponent };
//# sourceMappingURL=add-invitado.component.js.map