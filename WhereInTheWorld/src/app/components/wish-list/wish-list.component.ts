import { Component, OnInit } from '@angular/core';
import { CountryApi } from 'src/app/models/CountryApi.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishListCountries: any[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getWishList().subscribe({
      next: (data) => {
        console.log(data);
        this.wishListCountries = data;

        //const capital: string = data.countryCapital;
      },
    });
  }

  deleteVisitedCountry(country: CountryApi) {
    this.countriesService.deleteWishList(country.id).subscribe({
      next: (data) => {
        console.log('Country deleted:' + data.name);
      },
    });
    this.wishListCountries.splice(this.wishListCountries.indexOf(country), 1);
  }

}
