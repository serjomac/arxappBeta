import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { ServicioNotificacionService } from './servicio-notificacion.service';
describe('ServicioNotificacionService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ServicioNotificacionService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    it('should be created', function () {
        var service = TestBed.get(ServicioNotificacionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=servicio-notificacion.service.spec.js.map