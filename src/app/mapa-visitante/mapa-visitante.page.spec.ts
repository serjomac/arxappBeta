import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaVisitantePage } from './mapa-visitante.page';

describe('MapaVisitantePage', () => {
  let component: MapaVisitantePage;
  let fixture: ComponentFixture<MapaVisitantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaVisitantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaVisitantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
