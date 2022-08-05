import { Component, OnInit } from '@angular/core';
import { DogFetcherService } from '../services/dog-fetcher/dog-fetcher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public dogs$ = this.dogService.fetchAllDogs();
  constructor(private dogService: DogFetcherService) {}
}
