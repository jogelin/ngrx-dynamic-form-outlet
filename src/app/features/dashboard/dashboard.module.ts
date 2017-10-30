import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppSharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    AppSharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class AppDashboardModule {
  constructor(@Optional() @SkipSelf() parentModule: AppDashboardModule) {
    if (parentModule) {
      throw new Error('DashboardModule is already loaded. Import only in AppModule');
    }
  }
}
