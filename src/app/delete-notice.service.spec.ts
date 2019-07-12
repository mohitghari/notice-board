import { TestBed } from '@angular/core/testing';

import { DeleteNoticeService } from './delete-notice.service';

describe('DeleteNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteNoticeService = TestBed.get(DeleteNoticeService);
    expect(service).toBeTruthy();
  });
});
