import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvitadosPage } from './lista-invitados.page';

describe('ListaInvitadosPage', () => {
  let component: ListaInvitadosPage;
  let fixture: ComponentFixture<ListaInvitadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInvitadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInvitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
