import { formatDate } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  NgZone,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, AfterViewInit {
  _title;
  _time;
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;

  public get title(): string {
    console.log('子组件脏值检测');

    return this._title;
  }

  public get time(): number {
    return this._time;
  }

  constructor(private ngZone: NgZone, private rd: Renderer2) {
    this._title = 'hi';
  }

  ngOnInit() {
    // this._title = 'he';
    console.log(this.timeRef);
  }

  ngAfterViewInit(): void {
    // this._title = '777';
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        // this._time = Date.now();
        // this.timeRef.nativeElement.innerText = Date.now();
        this.rd.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          // Date.now()
          formatDate(Date.now(), 'HH:mm:ss: SSS', 'ZH-Hans')
        );
      }, 100);
    });
  }

  handleClick() {}
}
