import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { NavigationState } from './navigation.reducer';
import { StoreService } from '../../../store/app-store.service';
import { AppState } from '../../../store/app.reducer';

@Injectable()
export class NavigationStoreService extends StoreService {
  private state = createFeatureSelector<NavigationState>('navigation');

  private _getSidenavItems = createSelector(this.state, (state: NavigationState) => state.sidenav);
  public sidenavItems$ = this.store.select(this._getSidenavItems);

  constructor(protected store: Store<AppState>) {
    super();
  }

}
