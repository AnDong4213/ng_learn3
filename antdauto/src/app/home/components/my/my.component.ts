import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, of, Observable, interval, Subject } from 'rxjs';
import { scan, throttleTime, map, distinct } from 'rxjs/operators';
import html2canvas from 'html2canvas';
import Dom2pic from 'dom2pic';
import { Experiment } from 'src/app/model';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
interface event {
  clientX: number;
}

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('btnTest', { static: true }) btn: ElementRef;
  @ViewChild('divModule', { static: true }) divDom: ElementRef;
  @ViewChild('btnTest2', { static: true }) btn2: ElementRef;
  srcUrl: null;
  exp$: Subject<Experiment>;

  constructor() {
    this.exp$ = new Subject<Experiment>();
  }

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
        map((event: event) => event.clientX),
        scan((c, clientX) => c + clientX, 0)
      )
      .subscribe((c) => console.log(c));

    /* of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
      .pipe(distinct())
      .subscribe((x) => console.log(x)); */
    /* -------------------------------------------------------------------------------------------------------- */

    /* const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    // observable.subscribe((val) => console.log(val));
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe'); */

    console.log(
      '------------------------------------------------------------------------'
    );
    /* const foo = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
    });
    console.log('before');
    foo.subscribe((x) => {
      console.log(x);
    });
    console.log('after'); */

    // 它每隔一秒会向观察者发送字符串 'hi'
    /* const observable = new Observable((subscriber) => {
      const intervalID = setInterval(() => {
        subscriber.next('hi');
      }, 1000);

      return function unsubscribe() {
        clearInterval(intervalID);
      };
    }); */
    // observable.subscribe((val) => console.log(val));

    /* const observable1 = interval(400);
    const observable2 = interval(300);
    const observable3 = interval(200);

    const subscription = observable1.subscribe((x) =>
      console.log('first: ' + x)
    );
    const childSubscription = observable2.subscribe((x) =>
      console.log('second: ' + x)
    );
    const childSubscription3 = observable3.subscribe((x) =>
      console.log('third: ' + x)
    );
    childSubscription.add(childSubscription3);

    subscription.add(childSubscription);
    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSubscription
      subscription.unsubscribe();
    }, 1000); */

    /* -------------------------------------------------------------------------------------------------------- */
  }
  ngAfterViewInit(): void {
    this.exp$.subscribe((exp) => console.log('exp$', exp));
    // console.log(99);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  handleClick() {
    console.log(this.divDom.nativeElement.scrollHeight);
    console.log(this.divDom.nativeElement.scrollWidth);

    this.divDom.nativeElement.style.width = '2432px';
    html2canvas(this.divDom.nativeElement).then((canvas) => {
      document.body.appendChild(canvas);
      this.divDom.nativeElement.style.width = '800px';
    });
  }

  handleClick2() {
    this.divDom.nativeElement.style.width = '2432px';
    const dom2pic = new Dom2pic({
      root: this.divDom.nativeElement,
      backgroundColor: '#e2e2e2',
    });

    dom2pic.toJpeg().then((base64) => {
      console.log('--- jpeg base64 ---', base64);
      this.srcUrl = base64;
      this.divDom.nativeElement.style.width = '800px';
    });
  }
}
