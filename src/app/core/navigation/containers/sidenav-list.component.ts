import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationStoreService } from '../store/navigation-store.service';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-nav-list>
      <ng-container *ngFor="let item of storeService.sidenavItems$ | async">
        <a mat-list-item
           [routerLink]="item.routerLink"
           routerLinkActive="active"
           [ngClass]="item.clazz"
           [title]="item.labelKey">
          <mat-icon mat-list-icon>{{item.icon}}</mat-icon>
          <span mat-line>{{item.labelKey}}</span>
        </a>
      </ng-container>
    </mat-nav-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavListComponent implements OnInit {

  constructor(public storeService: NavigationStoreService) {
  }

  ngOnInit() {
  }

}
