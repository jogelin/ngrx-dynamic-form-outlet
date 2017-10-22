import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ConsultationStoreService } from './consultation-store.service';
import { ConsultationEffects } from './consultation.effects';
import { reducer } from './consultation.reducer';

// import ConsultationStoreModule in the ConsultationModule
@NgModule({
  imports: [
    StoreModule.forFeature('consultation', reducer),
    EffectsModule.forFeature([ConsultationEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [ConsultationStoreService]
})
export class ConsultationStoreModule {}
