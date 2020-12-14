import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkTheme = false;

  constructor() {}

  switchTheme(checked) {
    this.darkTheme = checked;
  }
}
