import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit-form',
  templateUrl: './book-edit-form.component.html',
  styleUrls: ['./book-edit-form.component.scss'],
})
export class BookEditFormComponent implements OnInit {
  @Output() updateBook: EventEmitter<any> = new EventEmitter<any>();
  @Input() genres: any;
  @Input() book: any;
  @Input() editFormBook: any;

  form: any = FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.book.name, [Validators.required]),
      genre: new FormControl(this.book.genre, [Validators.required]),
      pages: new FormControl(this.book.pages, [Validators.required]),
    });
  }

  submit() {
    if (this.form.valid) {
      const formData: any = {
        ...this.form.value,
        id: this.book.id,
      };
      const newBook = {
        id: formData.id,
        name: formData.name,
        genre: formData.genre,
        pages: formData.pages,
      };
      console.log(newBook);
      this.updateBook.emit(newBook);
    }
  }
}
