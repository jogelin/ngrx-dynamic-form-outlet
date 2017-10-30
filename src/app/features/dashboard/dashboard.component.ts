import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-grid-list gutterSize="12" cols="3" rowHeight="300px">
      <mat-grid-tile>
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-grid-tile-header>
          <mat-icon mat-grid-avatar>info_outline</mat-icon>

        </mat-grid-tile-header>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [`
    .mat-grid-tile {
      background-color: white;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
