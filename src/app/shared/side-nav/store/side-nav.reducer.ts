import { SideNavAction, SideNavActions } from './side-nav.actions';
import { TemplateRef } from '@angular/core';

export interface SideNavState {
  ref: TemplateRef<any>;
}

export const initialState: SideNavState = {
  ref: null
};

export function reducer(state = initialState, action: SideNavAction): SideNavState {

  switch (action.type) {
    case SideNavActions.UPDATE_SIDENAV: {
      return {
        ref: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
