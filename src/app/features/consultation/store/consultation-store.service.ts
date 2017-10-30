import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { AddConsultation, AddConsultationSucceed } from './consultation.actions';
import { Consultation } from '../models/consultation.model';
import { ConsultationState } from './consultation.reducer';
import { StoreService } from '../../../store/app-store.service';
import { AppState } from '../../../store/app.reducer';

@Injectable()
export class ConsultationStoreService extends StoreService {
  private state = createFeatureSelector<ConsultationState>('consultation');

  private getConsultation = createSelector(this.state, (state: ConsultationState) => state.consultation);
  public consultation$ = this.store.select(this.getConsultation);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchAddConsultationAction(consultation: Consultation) {
    this.dispatchAction(new AddConsultation(consultation));
  }

  dispatchAddConsultationSucceedAction(consultation: Consultation) {
    this.dispatchAction(new AddConsultationSucceed(consultation));
  }

}
