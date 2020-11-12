import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WxComponent, WxAuComponent } from './components';

const routes: Routes = [
  {
    path: 'chat',
    // pathMatch: 'full',
    component: WxComponent,
    children: [
      {
        path: '',
        redirectTo: 'au',
        pathMatch: 'full',
      },
      {
        path: 'au',
        component: WxAuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
