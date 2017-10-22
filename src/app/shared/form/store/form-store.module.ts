import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './form.reducer';
import { FormStoreService } from './form-store.service';


@NgModule({
  imports: [
    StoreModule.forFeature('form', reducer),
  ],
  exports: [StoreModule],
  providers: [FormStoreService]
})
export class FormStoreModule {
}
