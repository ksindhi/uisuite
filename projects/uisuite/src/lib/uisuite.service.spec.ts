import { TestBed } from '@angular/core/testing';

import { UisuiteService } from './uisuite.service';

describe('UisuiteService', () => {
  let service: UisuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UisuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
