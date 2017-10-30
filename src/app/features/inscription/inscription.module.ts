import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppSharedModule } from '../../shared/shared.module';
import { InscriptionComponent } from './containers/inscription.component';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { DeedOfSuccessionComponent } from './components/deed-of-succession.component';

@NgModule({
  imports: [
    AppSharedModule,
    InscriptionRoutingModule
  ],
  declarations: [InscriptionComponent, DeedOfSuccessionComponent]
})
export class AppInscriptionModule {
  constructor(@Optional() @SkipSelf() parentModule: AppInscriptionModule) {
    if (parentModule) {
      throw new Error('InscriptionModule is already loaded. Import only in AppModule');
    }
  }
}
