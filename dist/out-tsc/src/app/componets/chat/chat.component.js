import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(navParams, modal, chatService, fs, auth) {
        var _this = this;
        this.navParams = navParams;
        this.modal = modal;
        this.chatService = chatService;
        this.fs = fs;
        this.auth = auth;
        this.arrayMensajes = [];
        this.coloresDelosNombres = [];
        this.nombreDelosOtrosUsuariosTmp = [];
        this.nombreDelosOtrosUsuarios = [];
        this.uid = localStorage.getItem('userUid');
        this.chatRef = this.fs.collection('vicireelChat', function (ref) { return ref.orderBy('Timestamp'); }).valueChanges();
        this.colorNombre = this.dame_color_aleatorio();
        this.chatRef.forEach(function (chat) {
            if (chat.name != _this.auth.auth.currentUser.displayName) {
                //this.nombreDelosOtrosUsuariosTmp.push(chat.name);
                console.log(chat['name']);
                console.log(chat);
            }
        });
        for (var i = 0; i < this.nombreDelosOtrosUsuariosTmp.length; i++) {
            for (var j = 0; j < this.nombreDelosOtrosUsuariosTmp.length; j++) {
                if (this.nombreDelosOtrosUsuariosTmp[i] == this.nombreDelosOtrosUsuariosTmp[j]) {
                    this.nombreDelosOtrosUsuarios.push(this.nombreDelosOtrosUsuariosTmp[i]);
                    this.coloresDelosNombres.push(this.dame_color_aleatorio());
                    break;
                }
            }
        }
        for (var i = 0; i < this.nombreDelosOtrosUsuariosTmp.length; i++) {
            this.coloresDelosNombres.push(this.dame_color_aleatorio());
        }
        console.log(this.coloresDelosNombres);
        //this.ScrollToBottom()
    }
    ChatComponent.prototype.aleatorio = function (inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleat = Math.random() * numPosibilidades;
        aleat = Math.floor(aleat);
        return parseInt(inferior) + aleat;
    };
    ChatComponent.prototype.dame_color_aleatorio = function () {
        var hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var color_aleatorio = "#";
        for (var i = 0; i < 6; i++) {
            var posarray = this.aleatorio(0, hexadecimal.length);
            color_aleatorio += hexadecimal[posarray];
        }
        return color_aleatorio;
    };
    ChatComponent.prototype.ngOnInit = function () {
        //console.log(content2)
        //this.content.scrollToBottom(300);
        this.content.scrollToBottom(300);
        /*
        this.chatService.getChatRoom(this.chat.id).subscribe(room=>{
          console.log(room);
          this.room = room;
        });
        this.chat = this.navParams.get('chat');
        */
    };
    ChatComponent.prototype.closeChat = function () {
        this.modal.dismiss();
    };
    ChatComponent.prototype.sendMensaje = function () {
        var _this = this;
        if (this.msg != "") {
            var mensaje = {
                content: this.msg,
                type: "text",
                date: new Date(),
                name_user: this.auth.auth.currentUser.displayName,
                uid: this.auth.auth.currentUser.uid
            };
            this.fs.collection('vicireelChat').add({
                name: this.auth.auth.currentUser.displayName,
                constent: this.msg,
                id_user: this.auth.auth.currentUser.uid,
                Timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            //this.scrollToBottomOnInit();
            this.msg = "";
            setTimeout(function () {
                _this.content.scrollToBottom(200);
            }, 100);
            //this.ScrollToBottom()
        }
        else {
            console.log("debe llnar los campos");
        }
    };
    ChatComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log(this.content);
        setTimeout(function () {
            _this.content.scrollToBottom(5);
        }, 100);
        // this.content.scrollToBottom(300);
    };
    tslib_1.__decorate([
        ViewChild('content'),
        tslib_1.__metadata("design:type", Object)
    ], ChatComponent.prototype, "content", void 0);
    tslib_1.__decorate([
        ViewChild('content-end'),
        tslib_1.__metadata("design:type", Object)
    ], ChatComponent.prototype, "contentEnd", void 0);
    ChatComponent = tslib_1.__decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavParams,
            ModalController,
            ChatsService,
            AngularFirestore,
            AngularFireAuth])
    ], ChatComponent);
    return ChatComponent;
}());
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map