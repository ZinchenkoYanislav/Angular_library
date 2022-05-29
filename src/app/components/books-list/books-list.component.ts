import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Authors } from 'src/app/app.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  @Output() updateBookinStor: EventEmitter<any> = new EventEmitter<any>();
  @Input() author: Authors | undefined;
  @Input() genres: any;
  searchBook = '';
  editFormBook = false;

  constructor() {}

  ngOnInit(): void {}

  closeForm(){
    this.editFormBook = !this.editFormBook
  }

  deleteBook(book: any) {
    let bookslist = this.author?.books.filter(
      (item: { id: any }) => item.id !== book.id
    );
    if (this.author?.books !== undefined) {
      this.author.books = bookslist;
    }
    this.updateBookinStor.emit(bookslist);
  }

  updateBook(book: any) {
    console.log(book);
    let newBookList = this.author?.books.filter(
      (item: { id: any }) => item.id !== book.id
    );
    newBookList = [book, ...newBookList];
    if (this.author?.books !== undefined) {
      this.author.books = newBookList.sort(
        (a: { id: number }, b: { id: number }) => (a.id > b.id ? 1 : -1)
      );
    }
    this.updateBookinStor.emit(newBookList);
  }
}
