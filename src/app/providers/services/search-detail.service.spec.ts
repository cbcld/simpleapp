import { TestBed } from '@angular/core/testing';

import { SearchDetailService } from './search-detail.service';

describe('SearchDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchDetailService = TestBed.get(SearchDetailService);
    expect(service).toBeTruthy();
  });
});
