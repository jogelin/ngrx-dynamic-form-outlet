import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NavigationStoreService } from './navigation-store.service';
import { reducer } from './navigation.reducer';

// import NavigationStoreModule in the AppNavigationModule
@NgModule({
  imports: [
    StoreModule.forFeature('navigation', reducer)
  ],
  exports: [StoreModule, EffectsModule],
  providers: [NavigationStoreService]
})
export class NavigationStoreModule {
}
