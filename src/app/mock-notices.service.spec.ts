import { TestBed } from '@angular/core/testing';

import { MockNoticesService } from './mock-notices.service';

describe('MockNoticesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockNoticesService = TestBed.get(MockNoticesService);
    expect(service).toBeTruthy();
  });
});
