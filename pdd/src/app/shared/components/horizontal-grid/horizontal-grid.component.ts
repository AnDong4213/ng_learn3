import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators/index';

export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  username = '';
  username2 = '';
  username3 = '';

  private _username = '';
  @Output() usernameChange = new EventEmitter();
  @Emoji() result = 'Hello';

  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';

  constructor() {}

  ngOnInit() {}

  @Input()
  public get username4() {
    return this._username;
  }
  public set username4(value) {
    this._username = value;
    this.usernameChange.emit(this._username);
  }

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${
      this.displayCols * 0.4
    }rem) / ${this.displayCols}))`;
  }

  public handleScroll(ev) {
    this.sliderMargin = `0 ${
      (100 * ev.target.scrollLeft) / ev.target.scrollWidth
    }%`;
  }

  @Confirmable('已经点击，是否确认执行？')
  handleClick() {
    console.log('点击已执行');
  }
}
