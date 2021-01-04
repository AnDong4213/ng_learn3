import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.scss'],
})
export class RxjsLearnComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputDom: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.rxTest();
  }

  rxTest() {
    // console.log('inputDom', this.inputDom.nativeElement);
    fromEvent(this.inputDom.nativeElement, 'input').subscribe((ev: Event) => {
      console.log((ev.target as HTMLInputElement).value);
    });
  }
}
