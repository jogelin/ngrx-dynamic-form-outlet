import { Injectable } from '@angular/core';
import { Action, createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { StoreService } from '../../../store/app-store.service';
import { FormState } from './form.reducer';
import { AppState } from '../../../store/app.reducer';
import { FormSubmit, FormSubmitSuccess, FormUpdated } from './form.actions';

@Injectable()
export class FormStoreService extends StoreService {
  private state = createFeatureSelector<FormState>('form');

  private getForm = (path) => createSelector(this.state, (state: FormState) => state[path]);
  public form$ = (path) => this.store.select(this.getForm(path))
    .filter(value => !!value);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchFormUpdated(path: string, value: any) {
    this.dispatchAction(new FormUpdated({path: path, value: value}));
  }

  dispatchFormSubmitAction(actionType: string, value: any) {
    this.dispatchAction({type: actionType, payload: value} as Action);
  }

  dispatchFormSubmitSuccessAction(path: string) {
    this.dispatchAction(new FormSubmitSuccess({path: path}));
  }

}
