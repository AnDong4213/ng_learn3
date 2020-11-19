import { Component, OnInit } from '@angular/core';

import { of, fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
})
export class ChatContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.initProgram();
  }

  initProgram() {
    // console.log(2 ** 5);
    const switched = of(2, 3, 4).pipe(
      switchMap((x) => of(x, x ** 2, x ** 3, x ** 4))
    );
    switched.subscribe((x) => console.log(x));

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMap((ev) => interval(1000)));
    result.subscribe((x) => console.log(x));
  }
}
