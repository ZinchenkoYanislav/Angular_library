import { Pipe, PipeTransform } from '@angular/core';
import { Authors } from '../app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(authors: Authors[], search: string = ''): Authors[] {
    if (!search.trim()) {
      authors;
    }
    return authors.filter((author) => {
      return author.surname.toLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
