import { TestBed } from '@angular/core/testing';

import { UserFirebaseService } from './user-firebase.service';

describe('UserFirebaseService', () => {
  let service: UserFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
