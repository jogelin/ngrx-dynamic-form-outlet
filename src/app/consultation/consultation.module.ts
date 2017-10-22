import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ConsultationStoreModule } from './store/consultation-store.module';
import { ConsultationRoutingModule } from './consultation-routing.module';
import { FormConsultationComponent } from './form-consultation.component';
import { FormConsultationNotaryComponent } from './form-consultation-notary.component';
import { FormConsultationStudyComponent } from './form-consultation-study.component';
import { FormConsultationThirdpartyComponent } from './form-consultation-thirdparty.component';
import { DynamicModule } from 'ng-dynamic-component';
import { NgRxFormDirective } from '../shared/form/ngrx-form.directive';
import { FormModule } from '../shared/form/form.module';
import { SideNavModule } from '../shared/side-nav/side-nav.module';


@NgModule({
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ConsultationStoreModule,
    DynamicModule.withComponents([FormConsultationNotaryComponent, FormConsultationStudyComponent, FormConsultationThirdpartyComponent]),
    FormModule,
    SideNavModule
  ],
  declarations: [
    FormConsultationComponent,
    FormConsultationNotaryComponent,
    FormConsultationStudyComponent,
    FormConsultationThirdpartyComponent
  ],
  exports: [FormConsultationComponent]
})
export class ConsultationModule {
}
