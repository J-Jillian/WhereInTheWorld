import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryApi } from 'src/app/models/CountryApi.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-visited',
  templateUrl: './visited.component.html',
  styleUrls: ['./visited.component.css'],
})
export class VisitedComponent implements OnInit {
  visitedCountries: any[] = [];
  cities: any[] = [];

  // currentCountry: any = {
  //   name: "",
  //   population: 0,
  //   region: "",
  //   capital: "",
  //   flags: ""
  // }

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllVisited().subscribe({
      next: (data) => {
        console.log(data);
        this.visitedCountries = data;

        //const capital: string = data.countryCapital;
      },
    });
  }

  deleteVisitedCountry(country: CountryApi) {
    this.countriesService.deleteVisited(country.id).subscribe({
      next: (data) => {
        console.log('Country deleted:' + data.name);
      },
    });
    this.visitedCountries.splice(this.visitedCountries.indexOf(country), 1);
  }

  addVisitedCity(country: CountryApi) {
    let visitedCity = prompt("What's the city?");

    if (visitedCity) {
      this.countriesService
        .patchCountryCityName(country, visitedCity)
        .subscribe({
          next: (data) => {
            country.cityName = visitedCity;
            // this.cities = data;
            console.log('Country city visited updated');
          },
          error: (error) => {
            console.log(error.message);
          },
        });
    }
  }
}
