import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-consultation-notary',
  template: `
    <div *appSideNav>
      <h3>Route A notary</h3>
    </div>
  <div [formGroup]="form">
    firstname: <input type="text" formControlName="firstname" /><br>
    age: <input type="number" formControlName="age" /><br>
    profile: <input type="text" formControlName="profile" />
  </div>
 `
})
export class FormConsultationNotaryComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.addControl('firstname', this.fb.control('', [Validators.required]));
  }
}
