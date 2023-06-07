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
    const body: any = {
      countryName: country.name,
      countryPopulation: country.population,
      countryRegion: country.region,
      countryCapital: country.capital ? country.capital[0] : '',
      flags: country.flags,
    };
    this.countriesService.deleteVisited(body).subscribe({
      next: (data) => {
        console.log('Country deleted:' + data.name);
      },
    });
    this.visitedCountries.splice(this.visitedCountries.indexOf(country), 1);
  }
}