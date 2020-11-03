import { Routes, RouterModule } from '@angular/router';

import { MyComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: MyComponent,
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
