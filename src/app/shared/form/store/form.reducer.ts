import { FormAction, FormActions } from './form.actions';

export interface FormState {
  [path: string]: any;
}

export const initialState: FormState = {};

export function reducer(state = initialState, action: FormAction): FormState {

  switch (action.type) {
    case FormActions.FORM_UPDATED: {
      return {...state, [action.payload.path]: action.payload.value};
    }

    default: {
      return state;
    }
  }
}
