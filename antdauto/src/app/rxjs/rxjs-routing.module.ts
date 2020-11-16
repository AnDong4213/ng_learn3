import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BSiteComponent, ParentRxjsComponent } from './components';

const routes: Routes = [
  {
    path: 'rxjs',
    component: ParentRxjsComponent,
    children: [
      {
        path: '',
        redirectTo: 'brx',
        pathMatch: 'full',
      },
      {
        path: 'brx',
        component: BSiteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
