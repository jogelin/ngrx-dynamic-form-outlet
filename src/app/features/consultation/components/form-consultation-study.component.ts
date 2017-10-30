import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-consultation-study',
  template: `
    <div *appSideNav>
      <h3>Route A study</h3>
    </div>
    <div [formGroup]="form">
      name: <input type="text" formControlName="name" /><br>
      count: <input type="number" formControlName="count" />
    </div>
 `
})
export class FormConsultationStudyComponent implements OnInit {
  @Input()
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
