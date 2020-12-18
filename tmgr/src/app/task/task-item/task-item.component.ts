import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
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
  @Output() taskComplete = new EventEmitter();
  @Output() taskClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.avatar = this.item.owner
      ? <string>this.item.owner.avatar
      : 'unassigned';
  }

  itemClicked(ev: Event) {
    ev.preventDefault();
    this.taskClick.emit();
  }

  onCheckboxClick(ev: Event) {
    ev.stopPropagation();
  }

  checkboxChanged() {}
}
