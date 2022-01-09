import { TestBed } from '@angular/core/testing';

import { CardsServiceSentService } from './cards-service-sent.service';

describe('CardsServiceSentService', () => {
  let service: CardsServiceSentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsServiceSentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
