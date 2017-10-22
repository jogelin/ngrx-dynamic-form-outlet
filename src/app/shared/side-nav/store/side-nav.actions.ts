import { NgRxAction } from '../../../store/ngrx-action';
import { TemplateRef } from '@angular/core';

export enum SideNavActions {
  UPDATE_SIDENAV = '[SIDENAV] SIDENAV Update'
}

export class UpdateSideNav extends NgRxAction<TemplateRef<any>> {
  readonly type = SideNavActions.UPDATE_SIDENAV;
}

export type SideNavAction =
  UpdateSideNav;


