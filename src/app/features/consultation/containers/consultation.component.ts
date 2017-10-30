import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-consultation',
  template: `
    <app-form-consultation></app-form-consultation>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
