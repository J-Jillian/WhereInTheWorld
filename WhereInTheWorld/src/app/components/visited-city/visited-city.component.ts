import { Component, Input, OnInit } from '@angular/core';
import { Visited } from 'src/app/models/Visited.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-visited-city',
  templateUrl: './visited-city.component.html',
  styleUrls: ['./visited-city.component.css']
})
export class VisitedCityComponent implements OnInit {
  @Input('countryId')
  countryId: number = 0;

  visitedCities: Visited[] = [];

  constructor(private countriesServices: CountriesService){

  }

  ngOnInit(): void {
      this.countriesServices.getVisitedByCountry(this.countryId).subscribe({
        next: (data) => {
          this.visitedCities = data;
        }
      })
  }
}
