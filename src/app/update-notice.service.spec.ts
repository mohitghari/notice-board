import { TestBed } from '@angular/core/testing';

import { UpdateNoticeService } from './update-notice.service';

describe('UpdateNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateNoticeService = TestBed.get(UpdateNoticeService);
    expect(service).toBeTruthy();
  });
});
