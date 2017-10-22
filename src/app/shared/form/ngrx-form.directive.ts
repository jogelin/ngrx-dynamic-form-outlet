import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormGroupDirective } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import { FormStoreService } from './store/form-store.service';
import { FormActions, FormSubmitSuccess } from './store/form.actions';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/withLatestFrom';

@Directive({
  selector: '[appNgRxForm]'
})
export class NgRxFormDirective implements OnInit, OnDestroy {
  @Input() path: string;
  @Input() action: string;
  @Input() debounce = 300;
  @Output() error = new EventEmitter();
  @Output() success = new EventEmitter();
  formChange: Subscription;
  formSubmit: Subscription;
  formSuccess: Subscription;
  formError: Subscription;

  constructor(private formGroupDirective: FormGroupDirective, private actions$: Actions, private storeService: FormStoreService) {
  }

  ngOnInit() {
    this.storeService.form$(this.path)
      .take(1)
      .subscribe(val => {
        this.formGroupDirective.form.patchValue(val);
      });

    this.formChange = this.formGroupDirective.form.valueChanges
      .debounceTime(this.debounce)
      // .distinctUntilChanged((previous, current) => JSON.stringify(previous) !== JSON.stringify(current))
      .subscribe(value => this.storeService.dispatchFormUpdated(this.path, value));

    this.formSubmit = this.formGroupDirective.ngSubmit
      .withLatestFrom(this.storeService.form$(this.path))
      .subscribe(([_, value]) => this.storeService.dispatchFormSubmitAction(this.action, value));

    this.formSuccess = this.actions$
      .ofType<FormSubmitSuccess>(FormActions.FORM_SUBMIT_SUCCESS)
      .filter(({payload}) => payload.path === this.path)
      .subscribe(() => {
        this.formGroupDirective.form.reset();
        this.success.emit();
      });

    /*    this.formError = this.actions$
          .ofType<FormUpdated>(FormActions.FORM_SUBMIT_ERROR)
          .filter(({payload}) => payload.path === this.path)
          .subscribe(({payload}) => this.error.emit(payload.error));*/
  }

  ngOnDestroy() {
    this.formChange.unsubscribe();
    // this.formError.unsubscribe();
    this.formSubmit.unsubscribe();
    this.formSuccess.unsubscribe();
  }
}
