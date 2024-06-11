import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form:FormGroup=new FormGroup({
    'name':new FormControl(null),
    'age':new FormControl(),
    "_mail": new FormControl(' ', [Validators.required, Validators.maxLength(5)]),
    get "mail"() {
      return this["_mail"];
    },
    set "mail"(value) {
      this["_mail"] = value;
    },
  });

  ngOnInit(): void {
  }
  Submit(){
    console.log(this.form.errors);
    // console.log(this.form);
    // console.log(this.form.value);
  }
}
