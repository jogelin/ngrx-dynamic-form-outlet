import { NgModule } from '@angular/core';
import { NgRxFormDirective } from './ngrx-form.directive';
import { FormStoreModule } from './store/form-store.module';


@NgModule({
  imports: [
    FormStoreModule
  ],
  declarations: [
    NgRxFormDirective
  ],
  exports: [
    NgRxFormDirective
  ]
})
export class AppFormModule {
}
