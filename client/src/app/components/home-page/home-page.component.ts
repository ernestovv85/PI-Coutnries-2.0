import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/Interfaces/activities';
import { ICountry } from 'src/app/Interfaces/countries';
import { ActivitiesService } from 'src/app/services/activities/activities.service';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  countries: ICountry[] = [];
  activities: IActivity[] = [];
  page: number = 0
  search: string = ''
  selected: string = ''
  order: string = ''

  constructor(
    public countriesService: CountriesService,
    public activitiesService: ActivitiesService
    ) {}
  
  ngOnInit(): void {
   this.getCountries();
   this.getActivities();
  }

  getCountries(){
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  getActivities() {
    this.activitiesService.getActivities().subscribe(activities => {
      this.activities = activities;
    })
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
