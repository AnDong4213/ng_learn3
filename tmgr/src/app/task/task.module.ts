import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './task-routing.module';
import { SharedModule } from './../shared';

import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent,
  ],
  imports: [SharedModule, FeatureRoutingModule],
  entryComponents: [NewTaskComponent, NewTaskListComponent, CopyTaskComponent],
})
export class TaskModule {}
