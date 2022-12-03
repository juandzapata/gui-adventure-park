import { TestBed } from '@angular/core/testing';

import { PlanAtraccionService } from './plan-atraccion.service';

describe('PlanAtraccionService', () => {
  let service: PlanAtraccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanAtraccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
