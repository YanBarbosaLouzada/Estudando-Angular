import { TestBed } from '@angular/core/testing';

import { CalcularNotaService } from './calcular-nota.service';

describe('CalcularNotaService', () => {
  let service: CalcularNotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularNotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
