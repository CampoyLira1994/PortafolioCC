import { TestBed } from '@angular/core/testing';

import { ServiciocorreoService } from './serviciocorreo.service';

describe('ServiciocorreoService', () => {
  let service: ServiciocorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciocorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
