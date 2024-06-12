import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 // form:FormGroup=new FormGroup({ });

  form:FormGroup=this.fb.group({
    'name':new FormControl(null,Validators.required),
    'age':new FormControl(null),
    'mail': new FormControl('', [Validators.required, Validators.maxLength(12),Validators.minLength(5)])
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  }
  Submit(){
    console.log(this.form);
    console.log(this.form.value);
  }
}
