import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './side-nav.reducer';
import { SideNavStoreService } from './side-nav-store.service';


@NgModule({
  imports: [
    StoreModule.forFeature('sideNav', reducer),
  ],
  exports: [StoreModule],
  providers: [SideNavStoreService]
})
export class SideNavStoreModule {
}
