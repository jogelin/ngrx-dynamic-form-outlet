import { Navigation } from '../models/navigation.model';
import { Action } from '@ngrx/store';

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
      routerLink: '/inscription/deedOfSuccession',
      labelKey: 'Deed Of Succession',
      icon: 'face',
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
