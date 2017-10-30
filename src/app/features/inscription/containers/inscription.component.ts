import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  template: `
    <mat-grid-list gutterSize="12" cols="3" rowHeight="200px">
      <mat-grid-tile style="background:gray">
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
      <mat-grid-tile style="background:gray">
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
      <mat-grid-tile style="background:gray">
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
      <mat-grid-tile style="background:gray">
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [`
    
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InscriptionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
