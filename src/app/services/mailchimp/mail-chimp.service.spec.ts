import { TestBed } from '@angular/core/testing';

import { MailChimpService } from './mail-chimp.service';

describe('MailChimpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailChimpService = TestBed.get(MailChimpService);
    expect(service).toBeTruthy();
  });
});
