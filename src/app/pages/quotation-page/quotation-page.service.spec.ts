import { TestBed } from '@angular/core/testing';

import { QuotationPageService } from './quotation-page.service';

describe('QuotationPageService', () => {
  let service: QuotationPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotationPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
