import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;

  // startDate = new Date(2019, 6, 1);
  futureDate = new Date(2020, 10, 17);

  constructor() {}

  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev: any) => {
      console.log('ev', ev.target.value);
    });

    // console.log('hello');
  }

  handleClick() {}
}
