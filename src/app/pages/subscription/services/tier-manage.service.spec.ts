import { TestBed } from '@angular/core/testing';

import { TierManageService } from './tier-manage.service';

describe('TierManageService', () => {
  let service: TierManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TierManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
