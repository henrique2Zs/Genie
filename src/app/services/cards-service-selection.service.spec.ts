import { TestBed } from '@angular/core/testing';

import { CardsServiceSelectionService } from './cards-service-selection.service';

describe('CardsServiceSelectionService', () => {
  let service: CardsServiceSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsServiceSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
