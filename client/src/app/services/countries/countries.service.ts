import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/Interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL ='http://localhost:3001/countries'

  constructor(private http: HttpClient) { }

  getCountries():  Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.URL)
  }

  getById(_id: String): Observable<ICountry> {
    return this.http.get<ICountry>(`${this.URL}/${_id}`)
  }
}
