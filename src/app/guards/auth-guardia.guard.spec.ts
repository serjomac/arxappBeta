import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardiaGuard } from './auth-guardia.guard';

describe('AuthGuardiaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardiaGuard]
    });
  });

  it('should ...', inject([AuthGuardiaGuard], (guard: AuthGuardiaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
