import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountries } from 'src/app/Interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL ='http://localhost:3001/countries'

  constructor(private http: HttpClient) { }

  getCountries():  Observable<ICountries[]> {
    return this.http.get<ICountries[]>(this.URL)
  }

  getById(_id: String): Observable<ICountries> {
    return this.http.get<ICountries>(`${this.URL}/${_id}`)
  }

}
