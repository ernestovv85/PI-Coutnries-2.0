import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from '../Interfaces/countries';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(countries: ICountry[], page: number = 0, search: string = ''): ICountry[] {

    if(search.length === 0)
      return countries.slice(page, page + 10)

    const filterCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    return filterCountries.slice(page, page + 10)
  }

}
