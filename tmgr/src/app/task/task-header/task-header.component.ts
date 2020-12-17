import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHeaderComponent implements OnInit {
  @Input() header: string;
  @Output() newTask = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  addNewTask(e) {
    this.newTask.emit();
  }

  onChangeListName(e) {}

  onMoveAllTasks(e) {}

  onDeleteList(e) {}
}