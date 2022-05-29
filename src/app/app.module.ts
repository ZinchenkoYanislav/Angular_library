import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterBooksPipe } from './pipes/filter-books.pipe';
import { BookEditFormComponent } from './components/books-list/book-edit-form/book-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorFormComponent,
    BooksListComponent,
    BookFormComponent,
    FilterPipe,
    FilterBooksPipe,
    BookEditFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
