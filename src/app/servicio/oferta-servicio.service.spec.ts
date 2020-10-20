import { TestBed } from '@angular/core/testing';

import { OfertaServicioService } from './oferta-servicio.service';

describe('OfertaServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaServicioService = TestBed.get(OfertaServicioService);
    expect(service).toBeTruthy();
  });
});
