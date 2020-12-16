import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { User } from '../../domain';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InviteComponent implements OnInit {
  dialogTitle: string = '邀请成员';
  items = [
    {
      id: 1,
      name: 'sando1',
    },
    {
      id: 2,
      name: 'sando2',
    },
    {
      id: 3,
      name: 'sando3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(a, b) {}

  onClick() {}

  displayUser(user: User) {
    return user ? user.name : '';
  }
}
