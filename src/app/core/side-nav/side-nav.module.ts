import { NgModule } from '@angular/core';
import { SideNavDirective } from './side-nav.directive';
import { SideNavStoreModule } from './store/side-nav-store.module';
import { SideNavComponent } from './side-nav.component';


@NgModule({
  imports: [
    SideNavStoreModule
  ],
  declarations: [
    SideNavDirective,
    SideNavComponent
  ],
  exports: [
    SideNavDirective,
    SideNavComponent
  ]
})
export class AppSideNavModule {
}
