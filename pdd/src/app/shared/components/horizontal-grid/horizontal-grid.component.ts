import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
}
