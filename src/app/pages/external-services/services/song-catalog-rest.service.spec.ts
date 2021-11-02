import { TestBed } from '@angular/core/testing';

import { SongCatalogRestService } from './song-catalog-rest.service';

describe('SongCatalogRestService', () => {
  let service: SongCatalogRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongCatalogRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
