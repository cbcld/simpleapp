import { TestBed } from '@angular/core/testing';

import { restApiService } from './restApi.service';

describe('restApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: restApiService = TestBed.get(restApiService);
    expect(service).toBeTruthy();
  });
});
