import { TestBed } from '@angular/core/testing';

import { GetAllNoticeService } from './get-all-notice.service';

describe('GetAllNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllNoticeService = TestBed.get(GetAllNoticeService);
    expect(service).toBeTruthy();
  });
});
