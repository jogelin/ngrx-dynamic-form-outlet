import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { SideNavStoreModule } from '../core/side-nav/store/side-nav-store.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const MAT_MODULES = [
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatGridListModule
];
export const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ...MAT_MODULES
];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
export class AppSharedModule {
}
