import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryApi } from 'src/app/models/CountryApi.model';
import { Router } from '@angular/router';
import { Visited } from 'src/app/models/Visited.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countriesApiList: CountryApi[] = [];
  visitedList: CountryApi[] = [];

  constructor(
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (dataResult) => {
        console.log(dataResult);
        for (let i = 0; i < dataResult.length; i++) {
          this.countriesApiList.push(
            new CountryApi(
              dataResult[i].name.official,
              dataResult[i].population,
              dataResult[i].region,
              dataResult[i].capital,
              dataResult[i].flags.png
            )
          );
        }
        console.log(this.countriesApiList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  //1
  addToVisited(country: CountryApi) {
    const body : any = {
      countryName: country.name,
      countryPopulation: country.population,
      countryRegion: country.region,
      countryCapital: country.capital[0],
      countryFlag: country.flags,
    };
    console.log('body:', body);
    console.log('country:', country);
    this.countriesService.postCountryList(body).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
    this.visitedList.push(country);
    this.router.navigate(['/visited']);
  }

  // addVisitedCountry(): void {
  //   this.countriesService.getAllVisited().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //   });

  //   addToWishList(){}
  // }
}
