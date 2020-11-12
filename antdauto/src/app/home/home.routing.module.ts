import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: MyComponent,
  },
];

// export const HomeRoutes = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutes {}
