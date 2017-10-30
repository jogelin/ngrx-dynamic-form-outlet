import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true" class="mat-elevation-z3">
        <mat-toolbar>
          CER
        </mat-toolbar>
        <app-sidenav-list class="md-elevation-z5"></app-sidenav-list>
      </mat-sidenav>
      <div>
        <mat-toolbar>Consultation > On behalf of notary</mat-toolbar>
        <div class="main">
          <router-outlet></router-outlet>
        </div>
      </div>
    </mat-sidenav-container>
  `,
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
