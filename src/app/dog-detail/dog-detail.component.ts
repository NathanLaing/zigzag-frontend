import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Dog } from '../shared/dog.interface';
import { DogFetcherService } from '../services/dog-fetcher/dog-fetcher.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss'],
})
export class DogDetailComponent implements OnInit {
  public dog?: Dog;

  constructor(
    private location: Location,
    private dogFetcherService: DogFetcherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDog();
  }

  private getDog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dogFetcherService.fetchDog(id).subscribe((dog) => (this.dog = dog));
  }

  public goBack(): void {
    this.location.back();
  }
}
