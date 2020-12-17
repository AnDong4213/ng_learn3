import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './task-routing.module';
import { SharedModule } from './../shared';

import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
  ],
  imports: [SharedModule, FeatureRoutingModule],
  entryComponents: [NewTaskComponent],
})
export class TaskModule {}
