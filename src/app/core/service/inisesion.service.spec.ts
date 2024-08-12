import { TestBed } from '@angular/core/testing';

import { InisesionService } from './inisesion.service';

describe('InisesionService', () => {
  let service: InisesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InisesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
