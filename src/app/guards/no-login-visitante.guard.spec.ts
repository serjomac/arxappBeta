import { TestBed, async, inject } from '@angular/core/testing';

import { NoLoginVisitanteGuard } from './no-login-visitante.guard';

describe('NoLoginVisitanteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoLoginVisitanteGuard]
    });
  });

  it('should ...', inject([NoLoginVisitanteGuard], (guard: NoLoginVisitanteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
