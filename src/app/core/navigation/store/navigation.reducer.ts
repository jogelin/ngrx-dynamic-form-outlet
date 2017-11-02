import { Navigation } from '../models/navigation.model';
import { Action } from '@ngrx/store';
import { RecordTypes } from '../../../features/inscription/models/record-types.model';

export interface NavigationState {
  sidenav: Navigation[];
}

export const initialState: NavigationState = {
  sidenav: [
    {
      routerLink: '/dashboard',
      labelKey: 'Dashboard',
      icon: 'dashboard',
      clazz: 'nav-item'
    },
    {
      routerLink: '/inscription',
      labelKey: 'Inscription',
      icon: 'note_add',
      clazz: 'nav-item'
    },
    {
      routerLink: `/inscription/${RecordTypes.DEED_OF_SUCCESSION}`,
      labelKey: 'Deed Of Succession',
      icon: 'face',
      clazz: 'nav-sub-item'
    },
    {
      routerLink: `/inscription/${RecordTypes.WAVER_OF_SUCCESSION}`,
      labelKey: 'Waver Of Succession',
      icon: 'assignment_ind',
      clazz: 'nav-sub-item'
    },
    {
      routerLink: `/inscription/${RecordTypes.PUBLIC_OF_SUCCESSION}`,
      labelKey: 'Public Of Succession',
      icon: 'account_balance',
      clazz: 'nav-sub-item'
    },
    {
      routerLink: `/inscription/${RecordTypes.LONG_TYPE_OF_THE_SUCCESSION}`,
      labelKey: 'Long type Of The Succession Bla Bla Bla Bla Bla',
      icon: 'bug_report',
      clazz: 'nav-sub-item'
    },
    {
      routerLink: '/consultation',
      labelKey: 'Consultation',
      icon: 'search',
      clazz: 'nav-item'
    },
    {
      routerLink: '/correction',
      labelKey: 'Correction',
      icon: 'edit',
      clazz: 'nav-item'
    },
    {
      routerLink: '/cancellation',
      labelKey: 'Cancellation',
      icon: 'cancel',
      clazz: 'nav-item'
    }
  ]
};

export function reducer(state = initialState, action: Action): NavigationState {

  switch (action.type) {

    default: {
      return state;
    }
  }
}
