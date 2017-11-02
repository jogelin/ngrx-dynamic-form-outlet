import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './containers/inscription.component';
import { DeedOfSuccessionComponent } from './components/deed-of-succession.component';
import { RecordTypes } from './models/record-types.model';

const routes: Routes = [
  {
    path: 'inscription',
    children: [
      { path: '', pathMatch: 'full', redirectTo: RecordTypes.DEED_OF_SUCCESSION },
      { path: RecordTypes.DEED_OF_SUCCESSION, component: DeedOfSuccessionComponent },
      { path: RecordTypes.CERTIFICATE_EU_OF_SUCCESSION, component: DeedOfSuccessionComponent },
      { path: RecordTypes.LONG_TYPE_OF_THE_SUCCESSION, component: DeedOfSuccessionComponent },
      { path: RecordTypes.PUBLIC_OF_SUCCESSION, component: DeedOfSuccessionComponent },
      { path: RecordTypes.WAVER_OF_SUCCESSION, component: DeedOfSuccessionComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule {
}
