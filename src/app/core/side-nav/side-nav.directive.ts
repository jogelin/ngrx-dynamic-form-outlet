import {Directive, OnInit, TemplateRef} from '@angular/core';
import { SideNavStoreService } from './store/side-nav-store.service';

@Directive({
  selector: '[appSideNav]',
})
export class SideNavDirective implements OnInit {
  constructor(private storeService: SideNavStoreService, private ref: TemplateRef<any>) {}

  ngOnInit(): void {
    this.storeService.dispatchUpdateSideNav(this.ref);
  }
}
