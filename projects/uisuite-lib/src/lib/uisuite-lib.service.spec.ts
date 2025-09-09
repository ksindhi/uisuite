import { TestBed } from '@angular/core/testing';

import { UisuiteLibService } from './uisuite-lib.service';

describe('UisuiteLibService', () => {
  let service: UisuiteLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UisuiteLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
