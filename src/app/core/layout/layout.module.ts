import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SidenavListComponent } from '../navigation/containers/sidenav-list.component';
import { NavigationModule } from '../navigation/navigation.module';

export const MAT_MODULES = [
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    RouterModule,
    NavigationModule,
    ...MAT_MODULES
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
