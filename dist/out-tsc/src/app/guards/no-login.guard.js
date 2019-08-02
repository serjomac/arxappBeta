import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
var NoLoginGuard = /** @class */ (function () {
    function NoLoginGuard(AFauth, router, dataBase) {
        this.AFauth = AFauth;
        this.router = router;
        this.dataBase = dataBase;
    }
    NoLoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFauth.authState.pipe(map(function (auth) {
            if (isNullOrUndefined(auth)) {
                return true;
            }
            else {
                _this.router.navigate(['/tabs/home']);
                return false;
            }
        }));
    };
    NoLoginGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router, AngularFirestore])
    ], NoLoginGuard);
    return NoLoginGuard;
}());
export { NoLoginGuard };
//# sourceMappingURL=no-login.guard.js.map