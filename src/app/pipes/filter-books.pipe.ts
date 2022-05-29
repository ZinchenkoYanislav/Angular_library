import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: any, search: string = ''): any {
    if (!search.trim()) {
      books
    }
    return books.filter((book: { name: string; }) => {
      return book.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
