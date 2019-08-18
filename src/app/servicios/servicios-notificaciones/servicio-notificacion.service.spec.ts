import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioNotificacionService } from './servicio-notificacion.service';

describe('ServicioNotificacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioNotificacionService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: ServicioNotificacionService = TestBed.get(ServicioNotificacionService);
    expect(service).toBeTruthy();
  });
});
