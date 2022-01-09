import { TestBed } from '@angular/core/testing';

import { CardsServiceLikedService } from './cards-service-liked.service';

describe('CardsServiceLikedService', () => {
  let service: CardsServiceLikedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsServiceLikedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
