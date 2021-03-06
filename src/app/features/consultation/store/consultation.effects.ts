import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AddConsultation, AddConsultationSucceed, ConsultationActions } from './consultation.actions';
import { ConsultationStoreService } from './consultation-store.service';
import 'rxjs/add/observable/from';

@Injectable()
export class ConsultationEffects {
  @Effect()
  addConsultationAction$ = this.actions$
    .ofType<AddConsultation>(ConsultationActions.ADD_CONSULTATION)
    .map(({payload}) => new AddConsultationSucceed(payload));

  constructor(private storeService: ConsultationStoreService, private actions$: Actions) {
  }
}
