import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componets/chat/chat.component';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
var ChatPage = /** @class */ (function () {
    function ChatPage(route, chatServices, modal, actionSheetController, auth, fs) {
        this.route = route;
        this.chatServices = chatServices;
        this.modal = modal;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.fs = fs;
        this.arrayChats = [];
    }
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.chatServices.getChatRooms().subscribe(function (chats) {
            _this.arrayChats = chats;
        });
        this.chatVicrieel = this.fs.collection('vicireelChat').valueChanges();
    };
    ChatPage.prototype.openChat = function (chat) {
        this.modal.create({
            component: ChatComponent,
            componentProps: {
                chat: chat
            }
        }).then(function (modal) { return modal.present(); });
    };
    ChatPage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Opciones',
                            buttons: [{
                                    text: 'Cerrar sesion',
                                    role: 'destructive',
                                    icon: 'log-out',
                                    handler: function () {
                                        _this.auth.logOut();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage = tslib_1.__decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.page.html',
            styleUrls: ['./chat.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ChatsService,
            ModalController, ActionSheetController,
            AuthService, AngularFirestore])
    ], ChatPage);
    return ChatPage;
}());
export { ChatPage };
//# sourceMappingURL=chat.page.js.map