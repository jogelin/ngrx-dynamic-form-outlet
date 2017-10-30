import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { AppConsultationModule } from './features/consultation/consultation.module';
import { AppCoreModule } from './core/core.module';
import { AppDashboardModule } from './features/dashboard/dashboard.module';
import { AppInscriptionModule } from './features/inscription/inscription.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
    AppCoreModule,
    AppDashboardModule,
    AppConsultationModule,
    AppInscriptionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
