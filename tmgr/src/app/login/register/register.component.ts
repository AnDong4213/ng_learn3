import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  items: string[];

  constructor() {}

  ngOnInit() {
    const nums = _.range(1, 17);
    this.items = nums.map((d) => `avatars:svg-${d}`);
  }
}
