import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
var ChatsService = /** @class */ (function () {
    function ChatsService(dataBase) {
        this.dataBase = dataBase;
    }
    ChatsService.prototype.getChatRooms = function () {
        return this.dataBase.collection('chatRooms').snapshotChanges().pipe(map(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    ChatsService.prototype.getChatRoom = function (chat_id) {
        return this.dataBase.collection('chatRooms').doc(chat_id).valueChanges();
    };
    ChatsService.prototype.sendMsgToFirebase = function (message, chatId) {
        this.dataBase.collection('chatRooms').doc(chatId).update({
            messages: firestore.FieldValue.arrayUnion(message)
        });
    };
    ChatsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], ChatsService);
    return ChatsService;
}());
export { ChatsService };
//# sourceMappingURL=chats.service.js.map