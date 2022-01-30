import { TestBed } from '@angular/core/testing';

import { CardXcontactsService } from './cardXcontacts.service';

describe('ContactsXcardsService', () => {
  let service: CardXcontactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardXcontactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
