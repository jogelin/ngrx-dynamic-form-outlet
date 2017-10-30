import { Injectable, TemplateRef } from '@angular/core';
import { Action, createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { StoreService } from '../../../store/app-store.service';
import { AppState } from '../../../store/app.reducer';
import { SideNavState } from './side-nav.reducer';
import { UpdateSideNav } from './side-nav.actions';

@Injectable()
export class SideNavStoreService extends StoreService {
  private state = createFeatureSelector<SideNavState>('sideNav');

  private getRef = createSelector(this.state, (state: SideNavState) => state.ref);
  public ref$ = this.store.select(this.getRef)
    .filter(value => !!value);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchUpdateSideNav(ref: TemplateRef<any>) {
    this.dispatchAction(new UpdateSideNav(ref));
  }
}
