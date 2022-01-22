import { TestBed } from '@angular/core/testing';

import { cardXcontactsService } from './contacts-xcards.service';

describe('ContactsXcardsService', () => {
  let service: cardXcontactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cardXcontactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
