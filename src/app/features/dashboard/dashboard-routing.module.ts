import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

/*
TO KEEP AS EXAMPLE
const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard(layout:dashboard-layout)' },
    ]
  },
  { path: 'dashboard-layout', component: DashboardSidebarComponent, outlet: 'layout' },
];
*/
