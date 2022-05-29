import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authors } from 'src/app/app.component';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
})
export class AuthorFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Authors> = new EventEmitter<Authors>();
  @Input() authorEdit: Authors | undefined;

  form: any = FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      midlename: new FormControl('', []),
      dateBirth: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.form.valid) {
      const formData: Authors = {
        ...this.form.value,
        id: new Date().getTime(),
        books: [],
      };
      this.onAdd.emit(formData);
      this.form.reset()
    }
  }
}
