import { TestBed } from '@angular/core/testing';

import { InvitadoServiceService } from './invitado-service.service';

describe('InvitadoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitadoServiceService = TestBed.get(InvitadoServiceService);
    expect(service).toBeTruthy();
  });
});
