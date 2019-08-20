(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.html":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-buttons > -->\n    <div class=\"plusClass\" slot=\"end\">\n      <ion-icon name=\"menu\" expand=\"icon-only\" color=\"light\" (click)=\"presentActionSheet()\"> </ion-icon>\n    </div>\n    <!-- </ion-buttons> -->\n    <ion-title color=\"light\">\n      Chats\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  \n  <!-- <content> -->\n  <ion-list  no-padding>\n    <ion-item *ngFor = \"let chat of arrayChats\" (click)=\"openChat(chat)\">\n      <ion-avatar class=\"chatImage\" slot=\"start\">\n        <ion-img src=\"{{chat.img}}\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <div class=\"withcount\">\n          <div class=\"nameAvatar\">\n            <h2 color=\"light\">{{chat.name}}</h2>\n            <ion-avatar class=\"chatCount\"></ion-avatar>\n          </div>\n\n          <div class=\"timeEnd\">\n            <ion-text slot=\"end\" color=\"primary\"></ion-text>\n          </div>\n        </div>\n        <p class=\"widthHalf\">{{chat.description}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"openChat(chat)\">\n        <ion-avatar class=\"chatImage\" slot=\"start\">\n            <ion-img src=\"\"></ion-img>\n          </ion-avatar>\n          <ion-label>\n            <div class=\"withcount\">\n              <div class=\"nameAvatar\">\n                <h2 color=\"light\">Chat Vicrieel</h2>\n                <ion-avatar class=\"chatCount\"></ion-avatar>\n              </div>\n    \n              <div class=\"timeEnd\">\n                <ion-text slot=\"end\" color=\"primary\"></ion-text>\n              </div>\n            </div>\n            <p class=\"widthHalf\">Chat privado de los vecinos</p>\n          </ion-label>\n    </ion-item>\n\n  </ion-list>\n  <!-- </content> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plusClass {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: #07C0E6;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  box-shadow: 0 0.5px 0px 5px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0.12); }\n\nion-header:after {\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);\n  background-image: none;\n  left: 0;\n  bottom: -8px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\"; }\n\nion-content {\n  --background:#fff; }\n\nion-header,\nion-toolbar,\nion-item {\n  --background: #fff; }\n\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nion-segment-button {\n  color: #445C65;\n  --color-checked: var(--ion-color-tertiary-contrast);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.padding_right {\n  padding-right: 8px; }\n\n.tab-icon {\n  font-size: 20px; }\n\n.withcount {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n.chatCount {\n  background: #0090CF;\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px; }\n\nh2 {\n  color: #445C65; }\n\n.timeEnd {\n  display: flex;\n  justify-content: flex-end;\n  width: 50%; }\n\n.widthHalf {\n  width: 70%;\n  color: #445C65;\n  font-size: 12px; }\n\n.nameAvatar {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  width: 50%; }\n\n.nameAvatar h2 {\n    font-size: 0.94em;\n    font-weight: bold; }\n\nion-text {\n  font-size: 10px; }\n\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25hdGhhbm1hY2lhcy9Eb2N1bWVudHMvSm9uYXRoYW4vRXNwb2wvaW50ZWdyYWRvcmEvYXJ4YXBwQmV0YS9zcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwR0FBMEc7RUFDMUcsZ0hBQWdILEVBQUE7O0FBS2xIO0VBRUkseUNBQXlDO0VBQ3pDLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUNGLEVBQUE7O0FBRUY7RUFDRSxpQkFBYSxFQUFBOztBQUVmOzs7RUFHRSxrQkFBYSxFQUFBOztBQUVmO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxjQUFjO0VBQ2QsbURBQWdCO0VBQ2hCLGlEQUFpRCxFQUFBOztBQUVuRDtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGFBQWE7RUFDYiw2QkFBQTtFQUNBLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBSlo7SUFNSSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBsdXNDbGFzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDdDMEU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICByaWdodDogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbiAgICBib3gtc2hhZG93OiAwIDAuNXB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBcbiAgICAvLyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsY29sb3IgMTVtcyBsaW5lYXI7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4IHJnYmEoMzAsIDMyLCAzNSwgMC40NCksIDAgMXB4IDEwcHggMCByZ2JhKDMwLCAzMiwgMzUsIDAuNjQpLCAwIDBweCAwcHggMCByZ2JhKDMwLCAzMiwgMzUsIDAuNTUpO1xuICB9XG4gIGlvbi1oZWFkZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogLThweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBjb250ZW50OiBcIlwiXG4gICAgfVxuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZjtcbiAgfVxuICBpb24taGVhZGVyLFxuICBpb24tdG9vbGJhcixcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICAuY29udGVudENlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgY29sb3I6ICM0NDVDNjU7XG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIH1cbiAgLnBhZGRpbmdfcmlnaHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAudGFiLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAud2l0aGNvdW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jaGF0Q291bnQge1xuICAgIGJhY2tncm91bmQ6ICMwMDkwQ0Y7XG4gICAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIGgyIHtcbiAgICBjb2xvcjogIzQ0NUM2NTtcbiAgfVxuICAudGltZUVuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLndpZHRoSGFsZiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBjb2xvcjogIzQ0NUM2NTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLm5hbWVBdmF0YXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_chats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/chats.service */ "./src/app/servicios/chats.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _componets_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componets/chat/chat.component */ "./src/app/componets/chat/chat.component.ts");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");









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
            component: _componets_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
            componentProps: {
                chat: chat
            }
        }).then(function (modal) { return modal.present(); });
    };
    ChatPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_chats_service__WEBPACK_IMPORTED_MODULE_3__["ChatsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map