import { TestBed } from '@angular/core/testing';

import { RxjsServiceService } from './rxjs-service.service';

describe('RxjsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsServiceService = TestBed.get(RxjsServiceService);
    expect(service).toBeTruthy();
  });
});
