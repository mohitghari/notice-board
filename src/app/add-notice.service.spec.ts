import { TestBed } from '@angular/core/testing';

import { AddNoticeService } from './add-notice.service';

describe('AddNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNoticeService = TestBed.get(AddNoticeService);
    expect(service).toBeTruthy();
  });
});
