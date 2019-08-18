import { TestBed } from '@angular/core/testing';

import { InvitadoServiceService } from './invitadoserviceservice';

describe('InvitadoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitadoServiceService = TestBed.get(InvitadoServiceService);
    expect(service).toBeTruthy();
  });
});
