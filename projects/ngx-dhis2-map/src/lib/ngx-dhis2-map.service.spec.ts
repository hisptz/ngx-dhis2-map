import { TestBed } from '@angular/core/testing';

import { NgxDhis2MapService } from './ngx-dhis2-map.service';

describe('NgxDhis2MapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDhis2MapService = TestBed.get(NgxDhis2MapService);
    expect(service).toBeTruthy();
  });
});
