import { TestBed } from '@angular/core/testing';

import { SongCatalogService } from './song-catalog.service';

describe('SongCatalogService', () => {
  let service: SongCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
