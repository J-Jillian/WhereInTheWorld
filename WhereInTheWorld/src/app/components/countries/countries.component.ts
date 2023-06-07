import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CountryApi } from 'src/app/models/CountryApi.model';
import { Visited } from 'src/app/models/Visited.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  @Input('countryProp')
  country!: CountryApi;
  @Input('visitedProp')
  visited!: Visited;

  @Output() addToVisited = new EventEmitter<CountryApi>();
  @Output() addVisitedCountry = new EventEmitter<Visited>();

  selectedCountry: CountryApi | null;
  hasDetails: boolean = false;

  constructor(private countriesService: CountriesService) {
    this.selectedCountry = null;
  }


  showCountry(country: CountryApi): void {
    this.selectedCountry = country;
    this.hasDetails = !this.hasDetails;
  }

  onAddToVisited(): void {
    this.addToVisited.emit(this.country);
  }

  onaddVisitedCountry(): void {
    this.addVisitedCountry.emit(this.visited);
  }
}
