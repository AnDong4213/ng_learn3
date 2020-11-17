import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'app.addStyle.css'],
})
export class AppComponent {
  constructor() {}

  handleTabSelect(e) {
    console.log(e);
  }
}
