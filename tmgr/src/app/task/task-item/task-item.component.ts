import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { itemAnim } from '../../anims';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [itemAnim],
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  avatar: string;
  @Output() taskComplete = new EventEmitter();
  @Output() taskClick = new EventEmitter();
  widerPriority = 'in';

  constructor() {}

  ngOnInit(): void {
    this.avatar = this.item.owner
      ? <string>this.item.owner.avatar
      : 'unassigned';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in';
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
