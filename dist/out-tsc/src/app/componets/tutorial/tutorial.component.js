import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(actionSheetController, auth) {
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.visibleState = 'invisible';
    }
    TutorialComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.visibleState = "visible";
        }, 800);
        var slides = document.querySelector('ion-slides');
        console.log(slides);
    };
    TutorialComponent.prototype.aparicionImagen = function () {
        this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
    };
    TutorialComponent.prototype.presentActionSheet = function () {
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
    TutorialComponent = tslib_1.__decorate([
        Component({
            selector: 'app-tutorial',
            templateUrl: './tutorial.component.html',
            styleUrls: ['./tutorial.component.scss'],
            animations: [
                trigger('myVisility', [
                    state('visible', style({
                        opacity: 1
                    })),
                    state('invisible', style({
                        opacity: 0
                    })),
                    transition('* => *', animate('1s'))
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [ActionSheetController, AuthService])
    ], TutorialComponent);
    return TutorialComponent;
}());
export { TutorialComponent };
//# sourceMappingURL=tutorial.component.js.map