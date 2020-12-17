import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHeaderComponent implements OnInit {
  @Input() header: string;

  constructor() {}

  ngOnInit(): void {}

  addNewTask(e) {}

  onChangeListName(e) {}

  onMoveAllTasks(e) {}

  onDeleteList(e) {}
}
