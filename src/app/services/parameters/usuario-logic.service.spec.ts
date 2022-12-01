import { TestBed } from '@angular/core/testing';

import { UsuarioLogicService } from './usuario-logic.service';

describe('UsarioLogicService', () => {
  let service: UsuarioLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
