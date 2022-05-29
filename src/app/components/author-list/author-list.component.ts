import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authors } from 'src/app/app.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  @Input() author: Authors | undefined;
  @Output() onRemove = new EventEmitter<number>();
  @Output() onEditAuthor = new EventEmitter<object>();
  editForm = false;
  form: any = FormGroup;
  constructor() {}


  removeAuthor() {
    this.onRemove.emit(this.author?.id);
  }

  tooggleEditFormAuthor() {
    this.editForm = !this.editForm;
    this.form.patchValue({
      name: this.author?.name,
      surname: this.author?.surname,
      midlename: this.author?.midlename,
      dateBirth: this.author?.dateBirth,
    });
  }
  submit() {
    if (this.form.valid) {
      const formData: Authors = {
        ...this.form.value,
        id: this.author?.id,
        books: this.author?.books,
      };
      this.onEditAuthor.emit(formData);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      midlename: new FormControl('', []),
      dateBirth: new FormControl('', [Validators.required]),
    });
  }
}
