import { TestBed } from '@angular/core/testing';

import { NgsdkLibService } from './ngsdk-lib.service';

describe('NgsdkLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgsdkLibService = TestBed.get(NgsdkLibService);
    expect(service).toBeTruthy();
  });
});
