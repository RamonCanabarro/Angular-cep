import { TestBed } from '@angular/core/testing';

import { PesquisaCepService } from './pesquisa-cep.service';

describe('PesquisaCepService', () => {
  let service: PesquisaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
