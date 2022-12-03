import { TestBed } from '@angular/core/testing';

import { UsuarioSecurityService } from './usuario-security.service';

describe('UsuarioSecurityService', () => {
  let service: UsuarioSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
