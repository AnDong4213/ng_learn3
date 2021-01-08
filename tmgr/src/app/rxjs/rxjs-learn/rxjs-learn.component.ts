import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, combineLatest, of, timer, zip, from } from 'rxjs';
import { map, pluck, delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.scss'],
})
export class RxjsLearnComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputDom: ElementRef;
  @ViewChild('heightRef', { static: true }) heightDom: ElementRef;
  @ViewChild('widthRef', { static: true }) widthDom: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.rxTest();
  }

  rxTest() {
    fromEvent(this.inputDom.nativeElement, 'input').subscribe(
      (ev: KeyboardEvent) => {
        console.log((ev.target as HTMLInputElement).value);
      }
    );
    /* fromEvent(this.inputDom.nativeElement, 'input')
      .pipe(map((ev) => ev.timeStamp.toFixed(2)))
      .subscribe((val) => console.log(val)); */
    /* const clicks = fromEvent(document, 'click');
    clicks.subscribe((ev) => console.log((ev as MouseEvent).clientX)); */

    // combineLatest两个都有值才去运算的时候用
    /* const height$ = fromEvent(this.heightDom.nativeElement, 'input').pipe(
      pluck('target', 'value')
    ); */
    // const height$ = from([1, 2, 3, 4]);
    const height$ = of(10, 20);
    const width$ = fromEvent(this.widthDom.nativeElement, 'input').pipe(
      pluck('target', 'value')
    );
    // const area$ = combineLatest(height$, width$, (l, w) => l * w);    // Deprecated
    const area$ = combineLatest([height$, width$]).pipe(
      map((val) => {
        return (val[0] as number) * (val[1] as number);
      })
    );
    // const area$ = zip([height$, width$]);
    area$.subscribe((val) => {
      console.log(val);
    });

    /* const observables = [1, 4, 8].map((n) =>
      of(n).pipe(
        delay(n * 1000), // emit 0 and then emit n after n seconds
        startWith('n')
      )
    );
    const combined = combineLatest(observables);
    combined.subscribe((value) => console.log(value)); */

    console.log('--------------------------------------------');
  }

  rxTest2() {}
}
