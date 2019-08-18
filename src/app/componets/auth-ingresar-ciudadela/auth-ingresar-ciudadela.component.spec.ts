import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIngresarCiudadelaComponent } from './auth-ingresar-ciudadela.component';

describe('AuthIngresarCiudadelaComponent', () => {
  let component: AuthIngresarCiudadelaComponent;
  let fixture: ComponentFixture<AuthIngresarCiudadelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthIngresarCiudadelaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIngresarCiudadelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
