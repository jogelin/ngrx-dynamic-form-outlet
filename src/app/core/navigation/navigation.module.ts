import { NgModule } from '@angular/core';
import { NavigationStoreModule } from './store/navigation-store.module';
import { SidenavListComponent } from './containers/sidenav-list.component';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


export const MAT_MODULES = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationStoreModule,
    ...MAT_MODULES
  ],
  declarations: [
    SidenavListComponent
  ],
  exports: [
    SidenavListComponent
  ]
})
export class AppNavigationModule {
}
