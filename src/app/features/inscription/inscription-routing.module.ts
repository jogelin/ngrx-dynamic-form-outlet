import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './containers/inscription.component';
import { DeedOfSuccessionComponent } from './components/deed-of-succession.component';

const routes: Routes = [
  {
    path: 'inscription',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'deedOfSuccession' },
      { path: 'deedOfSuccession', component: DeedOfSuccessionComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule {
}
