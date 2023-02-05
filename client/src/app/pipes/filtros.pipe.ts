import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from '../Interfaces/countries';

@Pipe({
  name: 'filtros',
})
export class FiltrosPipe implements PipeTransform {
  transform(
    countries: ICountry[],
    page: number = 0,
    search: string = '',
    selected: string = '',
    order: string = ''
  ): ICountry[] {
    if (search.length === 0 && !selected && !order) {
      return countries.slice(page, page + 10);
    }
    let filterData = countries;
    if (search) {
      filterData = filterData.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selected) {
      filterData = filterData.filter((country) =>
        country.continent.toLowerCase().includes(selected.toLowerCase())
      );
    }
    if(order === 'asc'){
      filterData = filterData.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }else{
      filterData = filterData.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    return filterData.slice(page, page + 10);
  }
}
