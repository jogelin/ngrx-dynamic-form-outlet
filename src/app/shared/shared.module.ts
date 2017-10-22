import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormStoreModule } from './form/store/form-store.module';
import { FormModule } from './form/form.module';
import { SideNavStoreModule } from './side-nav/store/side-nav-store.module';

@NgModule({
  imports: [
    CommonModule,
    SideNavStoreModule
  ],
  exports: [
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
