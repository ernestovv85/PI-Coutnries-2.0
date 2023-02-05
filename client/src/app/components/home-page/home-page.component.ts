import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/Interfaces/countries';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  countries: ICountry[] = [];
  page: number = 0
  search: string = ''
  selected: string = ''
  order: string = ''

  constructor(public countriesService: CountriesService) {}
  
  ngOnInit(): void {
   this.getCountries()
  }

  getCountries(){
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  prevPage() {
    if(this.page > 0)
    this.page -= 10;
  }
  
  nextPage() {
    this.page += 10;
  }

  onSearch(search: string) {
    this.page = 0
    this.search = search
  }
}
