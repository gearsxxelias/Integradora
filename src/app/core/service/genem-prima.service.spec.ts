import { TestBed } from '@angular/core/testing';
import { GenemPrimaService } from './genem-prima.service';

describe('GenemPrimaService', () => {
  let service: GenemPrimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenemPrimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
