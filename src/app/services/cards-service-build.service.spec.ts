import { TestBed } from '@angular/core/testing';

import { CardsServiceBuild } from './cards-service-build.service';

describe('CardsServiceBuildService', () => {
  let service: CardsServiceBuild;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsServiceBuild);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
