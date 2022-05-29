import { Component, Input, OnInit } from '@angular/core';

export interface Book {
  id?: number;
  name: string;
  genre: string;
  pages: string;
}

export interface Authors {
  id?: number;
  name: string;
  surname: string;
  midlename?: string;
  dateBirth: string;
  books?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showAddAutorForm = false;
  showContent = 'authorsList';
  search = '';
  searchBook = '';

  autors: Authors[] = [
    {
      id: 1,
      name: 'Александр',
      surname: 'Пушкин',
      midlename: 'Сергеевич',
      dateBirth: '20July 1894',
      books: [
        { id: 1, name: 'Том 1', pages: 200, genre: 'Поэзия' },
        { id: 2, name: 'Toм 2', pages: 200, genre: 'Проза' },
      ],
    },
    {
      id: 2,
      name: 'Тарас',
      surname: 'Шевченко',
      midlename: 'Сергеевич',
      dateBirth: '10March 1855',
      books: [
        { id: 3, name: 'Том 1', pages: 200, genre: 'Поэзия' },
        { id: 4, name: 'Toм 2', pages: 200, genre: 'Проза' },
      ],
    },
  ];

  genres: any = [
    {
      id: 1,
      name: 'Поэзия',
    },
    {
      id: 2,
      name: 'Проза',
    },
    {
      id: 3,
      name: 'Фантастика',
    },
  ];

  toggleAddAutorForm() {
    this.showAddAutorForm = !this.showAddAutorForm;
  }

  addAuthor(autor: Authors) {
    this.autors.unshift(autor);
    this.updateStorage();
  }

  removeAuthor(id: number) {
    this.autors = this.autors.filter((item) => item.id !== id);
    this.updateStorage();
  }

  editAuthor(author: any) {
    this.autors = this.autors.filter((item) => item.id !== author.id);
    this.autors = [...this.autors, author].sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
    this.updateStorage();
  }

  addgenre(genre:any) {
    this.genres = [...this.genres, genre]
    this.updateStorage();
    console.log( this.genres)
  }

  addBook(author: any) {
    this.updateStorage();
  }

  updateBookinStor(book: any) {
    this.updateStorage();
  }

  displaySavedAuthor() {
    let savedAuthors = localStorage.getItem('autors');
    let savedGenres = localStorage.getItem('genres');
    if (savedAuthors) {
      this.autors = JSON.parse(savedAuthors);
    }
    if (savedGenres) {
      this.genres = JSON.parse(savedGenres);
    }
    // if(!savedAuthors && !savedGenres){
    //   this.updateStorage()
    // }
  }

  updateStorage() {
    localStorage.setItem('autors', JSON.stringify(this.autors));
    localStorage.setItem('genres', JSON.stringify(this.genres));
    console.log('Update Local stor', this.genres);
  }

  ngOnInit(): void {
    this.displaySavedAuthor();
  }
}
