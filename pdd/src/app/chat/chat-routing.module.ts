import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatContainerComponent } from './components';

const routes: Routes = [
  {
    // path: 'chat',
    path: '',
    component: ChatContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
