import { AfterViewInit, Component, EmbeddedViewRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SideNavStoreService } from './store/side-nav-store.service';

@Component({
  selector: 'app-side-nav',
  template: `
    <h2>I am the side nav</h2>
    <ng-container #vcr></ng-container>
  `
})
export class SideNavComponent implements AfterViewInit{
  _current: EmbeddedViewRef<any>|null = null;

  @ViewChild('vcr', {read: ViewContainerRef})
  vcr: ViewContainerRef;

  constructor(private storeService: SideNavStoreService) {}

  ngAfterViewInit(): void {
    this.storeService.ref$
      .subscribe(ref => {
        if (this._current !== null) {
          this._current.destroy();
          this._current = null;
        }
        if (ref === null) {
          return;
        }
        this._current = this.vcr.createEmbeddedView(ref);
      });
  }
}
