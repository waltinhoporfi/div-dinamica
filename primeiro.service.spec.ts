import { TestBed } from '@angular/core/testing';

import { PrimeiroService } from './primeiro.service';

describe('PrimeiroServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimeiroService = TestBed.get(PrimeiroService);
    expect(service).toBeTruthy();
  });
});
