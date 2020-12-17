import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewTaskComponent } from './../new-task/new-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHomeComponent implements OnInit {
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

  openNewProjectDialog() {}

  handleAddTask(id) {
    console.log('id', id);
    this.dialog.open(NewTaskComponent);
  }

  handleRenameList(list) {}

  handleDelList(list) {}

  handleMoveList(id) {}
}