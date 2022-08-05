import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DogFetcherService } from './dog-fetcher.service';

describe('DogFetcherService', () => {
  let service: DogFetcherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogFetcherService],
    });
    service = TestBed.inject(DogFetcherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchAllDogs', () => {
    beforeEach(() => {
      service.fetchAllDogs().subscribe();
    });

    it('should make a request to the /dogs endpoint', () => {
      expect(httpMock.expectOne('http://localhost:3000/dogs')).toBeTruthy();
    });
  });

  describe('fetchDog', () => {
    it('should make a request to the /dog endpoint with the id of the dog', () => {
      service.fetchDog(1).subscribe();
      expect(httpMock.expectOne('http://localhost:3000/dog/1')).toBeTruthy();
    });
  });
});
