import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './store/app-store.module';
import { ConsultationModule } from './consultation/consultation.module';
import { NgRxFormDirective } from './shared/form/ngrx-form.directive';
import { FormModule } from './shared/form/form.module';
import { SideNavModule } from './shared/side-nav/side-nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AppStoreModule,
    ConsultationModule,
    SideNavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
