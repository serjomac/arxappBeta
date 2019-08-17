import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvitadosGuardiaPage } from './lista-invitados-guardia.page';

describe('ListaInvitadosGuardiaPage', () => {
  let component: ListaInvitadosGuardiaPage;
  let fixture: ComponentFixture<ListaInvitadosGuardiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInvitadosGuardiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInvitadosGuardiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
