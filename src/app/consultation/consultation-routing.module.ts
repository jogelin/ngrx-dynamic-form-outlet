import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConsultationComponent } from './form-consultation.component';

const routes: Routes = [{ path: '', component: FormConsultationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule {}
