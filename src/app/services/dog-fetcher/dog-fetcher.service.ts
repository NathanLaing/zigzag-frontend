import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from 'src/app/shared/dog.interface';

@Injectable({
  providedIn: 'root',
})
export class DogFetcherService {
  backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public fetchAllDogs() {
    return this.http.get<Dog[]>(`${this.backendUrl}/dogs`);
  }

  public fetchDog(dogId: number) {
    return this.http.get<Dog>(`${this.backendUrl}/dog/${dogId}`);
  }
}
