import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-side-nav></app-side-nav>
    <app-form-consultation></app-form-consultation>
  `
})
export class AppComponent {
  constructor() {
  }
}
