import { TestBed } from '@angular/core/testing';

import { NgxXpIconsService } from './ngx-xp-icons.service';

describe('NgxXpIconsService', () => {
  let service: NgxXpIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxXpIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
