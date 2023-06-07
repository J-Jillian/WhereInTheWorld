import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryApi } from '../models/CountryApi.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countryApiList: CountryApi[] = [];

  private readonly API_URL = 'https://restcountries.com/v3.1';
  private readonly MY_API_URL = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/all`);
  }

  getAllVisited(): Observable<any[]> {
    return this.http.get<any[]>(`${this.MY_API_URL}/all`);
  }

  postCountryList(country: any): Observable<any> {
    return this.http.post<any>(`${this.MY_API_URL}/visited`, country);
  }

  deleteVisited(country: any): Observable<any> {
    return this.http.delete<any>(`${this.MY_API_URL}/visited`, country);
  }
}
