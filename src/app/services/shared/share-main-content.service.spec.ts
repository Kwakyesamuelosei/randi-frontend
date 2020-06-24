import { TestBed } from '@angular/core/testing';

import { ShareMainContentService } from './share-main-content.service';

describe('ShareMainContentService', () => {
  let service: ShareMainContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMainContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
