import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCGuard } from './auth-c.guard';

describe('AuthCGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCGuard]
    });
  });

  it('should ...', inject([AuthCGuard], (guard: AuthCGuard) => {
    expect(guard).toBeTruthy();
  }));
});
