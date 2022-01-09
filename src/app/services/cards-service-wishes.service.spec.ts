import { TestBed } from '@angular/core/testing';

import { CardsServiceWishesService } from './cards-service-wishes.service';

describe('CardsServiceWishesService', () => {
  let service: CardsServiceWishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsServiceWishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
