import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGuardiaPage } from './lista-guardia.page';

describe('ListaGuardiaPage', () => {
  let component: ListaGuardiaPage;
  let fixture: ComponentFixture<ListaGuardiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGuardiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGuardiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
