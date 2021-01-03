import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedTab = 0;
  form: FormGroup;
  private readonly avatarName = 'avatars';

  items: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
    this.form = this.fb.group({
      name: [],
      email: [],
      password: [],
      repeat: [],
      avatar: [img],
    });

    const nums = _.range(1, 17);
    this.items = nums.map((d) => `avatars:svg-${d}`);
  }

  onSubmit({ value, valid }: FormGroup, e: Event) {}
}
