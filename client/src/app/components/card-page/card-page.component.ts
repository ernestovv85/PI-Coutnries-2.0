import { Component } from '@angular/core';
import { ICountries } from 'src/app/Interfaces/countries';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent {
  allCountries: ICountries[] = [];
  country!: ICountries;
  constructor(public countries: CountriesService) {}
  
  ngOnInit(): void {
    this.countries.getCountries().subscribe((countries) => {
      this.allCountries = countries;
    });
  }
}
