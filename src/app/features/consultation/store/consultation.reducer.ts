import { ConsultationAction, ConsultationActions } from './consultation.actions';
import { Consultation } from '../models/consultation.model';

export interface ConsultationState {
  consultation: Consultation;
}

export const initialState: ConsultationState = {
  consultation: null
};

export function reducer(state = initialState, action: ConsultationAction): ConsultationState {

  switch (action.type) {
    case ConsultationActions.ADD_CONSULTATION: {
      return state;
    }

    case ConsultationActions.ADD_CONSULTATION_SUCCEED: {
      return {
        consultation: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
