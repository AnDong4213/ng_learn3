import { Component } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state('green', style({ backgroundColor: 'green' })),
      state('red', style({ backgroundColor: 'red' })),
      transition('green => red', animate(1000)),
      transition('red => green', animate(1000)),
    ]),
    trigger('square2', [
      state('green', style({ backgroundColor: 'pink' })),
      state('red', style({ backgroundColor: 'orange' })),
      transition('green => red', animate(1000)),
      transition(
        'red => green',
        animate(
          '3s',
          keyframes([
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'blue' }),
            style({ backgroundColor: 'orange' }),
            style({ backgroundColor: 'black' }),
          ])
        )
      ),
    ]),
  ],
})
export class AppComponent {
  squareState: string;
  darkTheme = false;

  constructor() {}

  switchTheme(checked) {
    this.darkTheme = checked;
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
