import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  avatar: string;

  constructor() {}

  ngOnInit(): void {
    this.avatar = this.item.owner
      ? <string>this.item.owner.avatar
      : 'unassigned';
  }

  itemClicked(e) {}

  onCheckboxClick(e) {}

  checkboxChanged() {}
}