import { Action, Store } from '@ngrx/store';

import { AppState } from './app.reducer';

export abstract class StoreService {
  protected store: Store<AppState>;

  protected dispatchAction(action: Action) {
    this.store.dispatch(action);
  }
}
