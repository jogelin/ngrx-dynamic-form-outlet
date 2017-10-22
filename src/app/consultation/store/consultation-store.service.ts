import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { StoreService } from '../../store/app-store.service';
import { AppState } from '../../store/app.reducer';
import { AddConsultation, AddConsultationSucceed } from './consultation.actions';
import { Consultation } from '../model/consultation';
import { ConsultationState } from './consultation.reducer';

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
