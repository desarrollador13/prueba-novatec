import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaOfertaComponent } from './busqueda-oferta.component';

describe('BusquedaOfertaComponent', () => {
  let component: BusquedaOfertaComponent;
  let fixture: ComponentFixture<BusquedaOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
