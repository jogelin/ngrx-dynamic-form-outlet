import { NgRxAction } from '../../store/ngrx-action';
import { Consultation } from '../model/consultation';

export enum ConsultationActions {
  ADD_CONSULTATION = '[Consultation] ADD Consultation',
  ADD_CONSULTATION_SUCCEED = '[Consultation] ADD Consultation Succeed'
}

export class AddConsultation extends NgRxAction<Consultation> {
  readonly type = ConsultationActions.ADD_CONSULTATION;
}

export class AddConsultationSucceed extends NgRxAction<Consultation> {
  readonly type = ConsultationActions.ADD_CONSULTATION_SUCCEED;
}

export type ConsultationAction =
  AddConsultation | AddConsultationSucceed;


