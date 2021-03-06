import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConsultationStudyComponent } from '../components/form-consultation-study.component';
import { FormConsultationNotaryComponent } from '../components/form-consultation-notary.component';
import { ConsultationActions } from '../store/consultation.actions';

@Component({
  selector: 'app-form-consultation',
  template: `
    <form [formGroup]="form"
          (ngSubmit)="submit($event)"
          (success)="onSuccess()"
          (error)="onError($event)"
          path="consultation"
          [action]="actionType"
          appNgRxForm>
      <mat-card>
        <mat-card-content>
          <ndc-dynamic [ndcDynamicComponent]="component"
                       [ndcDynamicInputs]="inputs"
                       [ndcDynamicOutputs]="outputs"></ndc-dynamic>
        </mat-card-content>
        <mat-card-actions>

          <button type="submit">Submit</button>
        </mat-card-actions>
      </mat-card>
    </form>
  `
})
export class FormConsultationComponent implements OnInit {

  readonly actionType = ConsultationActions.ADD_CONSULTATION;

  component: any = FormConsultationNotaryComponent;

  form: FormGroup;

  inputs = {};
  outputs = {};

  constructor(private fb: FormBuilder) {

  }

  onError(error) {
    console.log('ERROR');
  }

  onSuccess() {
    console.log('SUCCESS');
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      age: 0,
      count: 0,
      profile: ''
    });

    this.inputs = {
      form: this.form
    };
  }

  submit(event) {
    event.preventDefault();
    this.component = (this.component === FormConsultationStudyComponent) ? FormConsultationNotaryComponent : FormConsultationStudyComponent;
  }
}
