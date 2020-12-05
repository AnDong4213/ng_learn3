import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="container test">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        height: 100%;
      }
    `,
  ],
})
export class DialogComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
