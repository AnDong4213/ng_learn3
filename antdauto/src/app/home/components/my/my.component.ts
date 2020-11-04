import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { scan, throttleTime, map, distinct } from 'rxjs/operators';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit {
  @ViewChild('btnTest', { static: true }) btn: ElementRef;

  constructor() {}

  ngOnInit() {
    /* let count = 0;
    let button = document.querySelector('button');
    button.addEventListener('click', () =>
      console.log(`Clicked ${++count} times`)
    ); */
    /* fromEvent(this.btn.nativeElement, 'click').subscribe(() =>
      console.log('Clicked22!')
    ); */
    // scan 操作符的工作原理与数组的 reduce 类似。它需要一个暴露给回调函数当参数的初始值。每次回调函数运行后的返回值会作为下次回调函数运行时的参数。
    /* fromEvent(this.btn.nativeElement, 'click')
      .pipe(scan((count) => count + 1, 10))
      .subscribe((count) => console.log(`Clicked ${count} times`)); */
    // 如何控制一秒钟内最多点击一次，使用普通的 JavaScript
    /* let count = 0;
    let rate = 1000;
    let lastClick = Date.now() - rate;
    document.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        console.log(`Clicked ${++count} times`);
        lastClick = Date.now();
      }
    }); */
    // 使用 RxJS：
    /* fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        scan((count) => count + 1, 0)
      )
      .subscribe((c) => {
        console.log(`Clicked ${c} times`);
      }); */

    // 对于流经 observables 的值，可以对其进行转换。(普通的 JavaScript)
    let count = 0;
    let rate = 1000;
    let lastclick = Date.now() - rate;
    let button = document.querySelector('button');
    button.addEventListener('click', (e) => {
      if (Date.now() - lastclick >= rate) {
        count += e.clientX;
        console.log('count', count);
        lastclick = Date.now();
      }
    });

    // With RxJS:
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        throttleTime(1000),
        map((event) => event.clientX),
        scan((c, clientX) => c + clientX, 0)
      )
      .subscribe((c) => console.log(c));

    of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
      .pipe(distinct())
      .subscribe((x) => console.log(x));
  }
}
