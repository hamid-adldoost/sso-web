import { TestBed, inject } from '@angular/core/testing';

import { WebPageService } from './web-page.service';

describe('WebPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebPageService]
    });
  });

  it('should be created', inject([WebPageService], (service: WebPageService) => {
    expect(service).toBeTruthy();
  }));
});
