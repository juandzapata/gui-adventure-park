import { TestBed } from '@angular/core/testing';

import { SercurityService } from './sercurity.service';

describe('SercurityService', () => {
  let service: SercurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SercurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
