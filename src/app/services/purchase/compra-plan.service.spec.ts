import { TestBed } from '@angular/core/testing';

import { CompraPlanService } from './compra-plan.service';

describe('CompraPlanService', () => {
  let service: CompraPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
