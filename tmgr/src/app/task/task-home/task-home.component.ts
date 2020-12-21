import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  HostBinding,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewTaskComponent } from './../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { NewTaskListComponent } from './../new-task-list/new-task-list.component';
import { ConfirmDialogComponent } from './../../shared';
import { slideToRight } from '../../anims';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideToRight],
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去星巴克买呗快克',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 讲解ppt作业讲解ppt作业讲解ppt作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12',
          },
          dueDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三: 项目代码评审',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四: 指定项目计划',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '马六',
            avatar: 'avatars:svg-12',
          },
          dueDate: new Date(),
        },
      ],
    },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  handleAddTask(id) {
    // console.log('id', id);
    this.dialog.open(NewTaskComponent, {
      data: { title: '新建任务' },
    });
  }

  handleDelList(list) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        dialog: {
          title: '删除任务列表',
          content: '确定删除该任务列表吗？',
          confirmAction: '确定',
        },
      },
    });
    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

  handleMoveList(listId: string) {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
      data: { srcListId: listId, lists: this.lists },
    });
  }

  handleUpdateTask(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: { title: '修改任务', task },
    });
  }

  handleRenameList(list) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        name: list.name,
      },
    });
  }

  handleNewTaskList(ev: Event) {
    ev.preventDefault();
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: {} });
  }

  handleCompleteTask(task) {}
}
