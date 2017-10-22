import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'consultation', loadChildren: 'app/consultation/consultation.module#ConsultationModule' },
  { path: '', pathMatch: 'full', redirectTo: 'consultation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
