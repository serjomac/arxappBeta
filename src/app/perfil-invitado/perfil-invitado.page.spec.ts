import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInvitadoPage } from './perfil-invitado.page';

describe('PerfilInvitadoPage', () => {
  let component: PerfilInvitadoPage;
  let fixture: ComponentFixture<PerfilInvitadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilInvitadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInvitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
