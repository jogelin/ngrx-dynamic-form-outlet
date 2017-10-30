import { NgModule } from '@angular/core';

import { ConsultationStoreModule } from './store/consultation-store.module';
import { ConsultationRoutingModule } from './consultation-routing.module';
import { FormConsultationComponent } from './containers/form-consultation.component';
import { FormConsultationNotaryComponent } from './components/form-consultation-notary.component';
import { FormConsultationStudyComponent } from './components/form-consultation-study.component';
import { FormConsultationThirdpartyComponent } from './components/form-consultation-thirdparty.component';
import { DynamicModule } from 'ng-dynamic-component';
import { AppSharedModule } from '../../shared/shared.module';
import { AppFormModule } from '../../shared/form/form.module';
import { AppSideNavModule } from '../../core/side-nav/side-nav.module';
import { ConsultationComponent } from './containers/consultation.component';


@NgModule({
  imports: [
    AppSharedModule,
    ConsultationRoutingModule,
    ConsultationStoreModule,
    DynamicModule.withComponents([
      FormConsultationNotaryComponent,
      FormConsultationStudyComponent,
      FormConsultationThirdpartyComponent]),
    AppFormModule
  ],
  declarations: [
    FormConsultationComponent,
    FormConsultationNotaryComponent,
    FormConsultationStudyComponent,
    FormConsultationThirdpartyComponent,
    ConsultationComponent
  ]
})
export class AppConsultationModule {
}
