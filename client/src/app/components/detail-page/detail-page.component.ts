import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from 'src/app/Interfaces/countries';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  @Input() countryId?: ICountry
  constructor(
    private route: ActivatedRoute,
    private country: CountriesService,
    private location: Location
    ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.country.getById(id).subscribe(idCountry => {
      this.countryId = idCountry
    })
  }

  goBack(): void {
    this.location.back();
  }

}
