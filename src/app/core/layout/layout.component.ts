import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <mat-toolbar color="primary" class="topnav">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>CER</span>
      <mat-icon>keyboard_arrow_right</mat-icon>
      <span>Consultation</span>
      <mat-icon>keyboard_arrow_right</mat-icon>
      <span>On behalf of notary</span>
      <span flex></span>
      <button mat-raised-button color="accent">
        <mat-icon>picture_as_pdf</mat-icon>
        Certificat
      </button>
      <button mat-raised-button>
        <mat-icon>settings_backup_restore</mat-icon>
        Reset
      </button>
      <button mat-raised-button color="accent">
        <mat-icon>save</mat-icon>
        Save
      </button>
    </mat-toolbar>
    <mat-sidenav-container fullscreen>
      <mat-sidenav mode="side" opened="true" #sidenav>
        <app-sidenav-list></app-sidenav-list>
      </mat-sidenav>
      <div class="mat-content">
        <router-outlet></router-outlet>
      </div>
    </mat-sidenav-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
