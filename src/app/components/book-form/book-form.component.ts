import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authors} from 'src/app/app.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Authors> = new EventEmitter<Authors>();
  @Output() addgenre: EventEmitter<Authors> = new EventEmitter<Authors>();
  @Input() autors: any;
  @Input() genres: any;
  form: any = FormGroup;
  formGenre: any = FormGroup;
  showFormGenre = false
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      pages: new FormControl('', [Validators.required]),
    });
    this.formGenre = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  submitGenre(){
    if (this.formGenre.valid) {
      const formData: any = {
        ...this.formGenre.value,
        id: new Date().getTime(),
      };
      this.addgenre.emit(formData)
      this.formGenre.reset()
    }
  }

  submit() {
    if (this.form.valid) {
      const formData: any = {
        ...this.form.value,
        id: new Date().getTime(),
      };
      const newBook = {
        id: formData.id,
        name: formData.name,
        genre: formData.genre,
        pages: formData.pages,
      };

      let newAuthor = this.autors.filter(
        (item: any) => item.id === parseInt(formData.author)
      );
      newAuthor[0].books =  [...newAuthor[0].books, newBook]
      this.onAddBook.emit(newAuthor[0]);
      this.form.reset()
    }
  }
}
