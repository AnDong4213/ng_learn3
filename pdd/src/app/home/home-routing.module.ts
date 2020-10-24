import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        /**
         * 路由节点可以没有 component
         * 一般用于重定向到一个默认子路由
         */
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full',
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'grand',
            component: HomeGrandComponent,
          },
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second',
          },
        ],
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
