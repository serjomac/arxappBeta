import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
var HomePage = /** @class */ (function () {
    function HomePage(router, actionSheetController, auth) {
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
    }
    HomePage.prototype.presentActionSheet = function () {
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
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActionSheetController, AuthService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map