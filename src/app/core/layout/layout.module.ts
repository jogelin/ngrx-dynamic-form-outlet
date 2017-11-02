import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SidenavListComponent } from '../navigation/containers/sidenav-list.component';
import { AppNavigationModule } from '../navigation/navigation.module';
import { CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule } from '@covalent/core';
import { CommonModule } from '@angular/common';

export const MAT_MODULES = [
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentMediaModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppNavigationModule,
    ...MAT_MODULES
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [LayoutComponent]
})
export class AppLayoutModule {
}
