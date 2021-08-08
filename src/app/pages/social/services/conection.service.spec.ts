import { TestBed } from '@angular/core/testing';

import { ConectionService } from './conection.service';

describe('ConectionService', () => {
  let service: ConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
