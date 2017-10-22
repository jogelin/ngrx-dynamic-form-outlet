import { NgRxAction } from '../../../store/ngrx-action';
import { FormPayload } from '../model/form-payload';

export enum FormActions {
  FORM_UPDATED = '[FORM] FORM Updated',
  FORM_SUBMIT = '[FORM] FORM Submit',
  FORM_SUBMIT_SUCCESS = '[FORM] FORM Submit Success'
}

export class FormUpdated extends NgRxAction<FormPayload> {
  readonly type = FormActions.FORM_UPDATED;
}

export class FormSubmit extends NgRxAction<FormPayload> {
  readonly type = FormActions.FORM_SUBMIT;
}

export class FormSubmitSuccess extends NgRxAction<FormPayload> {
  readonly type = FormActions.FORM_SUBMIT_SUCCESS;
}

export type FormAction =
  FormUpdated | FormSubmit | FormSubmitSuccess;


