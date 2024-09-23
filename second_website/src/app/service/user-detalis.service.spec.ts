import { TestBed } from '@angular/core/testing';

import { UserDetalisService } from './user-detalis.service';

describe('UserDetalisService', () => {
  let service: UserDetalisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetalisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
