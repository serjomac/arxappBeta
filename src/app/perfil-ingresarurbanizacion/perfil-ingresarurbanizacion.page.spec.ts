import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilIngresarurbanizacionPage } from './perfil-ingresarurbanizacion.page';

describe('PerfilIngresarurbanizacionPage', () => {
  let component: PerfilIngresarurbanizacionPage;
  let fixture: ComponentFixture<PerfilIngresarurbanizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilIngresarurbanizacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilIngresarurbanizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
