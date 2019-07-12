import { TestBed } from '@angular/core/testing';

import { GetSingleNoticeService } from './get-single-notice.service';

describe('GetSingleNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSingleNoticeService = TestBed.get(GetSingleNoticeService);
    expect(service).toBeTruthy();
  });
});
