import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeContainerComponent, HomeDetailComponent } from './home';

/* const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full',
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
      },
    ],
  },
  // { path: 'path', component: FeatureComponent },
  // { path: '**', component: PageNotFoundComponent },
]; */
// const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }];

/**
 * 在功能模块中定义子路由后，只要导入该模块，等同于在根路由中直接定义
 * 也就是说在 AppModule 中导入 HomeModule 的时候，
 * 由于 HomeModule 中导入了 HomeRouting Module
 * 在 HomeRoutingModule 中定义的路由会合并到根路由表
 * 相当于直接在根模块中定义下面的数组。
 * 需要注意的一个地方是 Angular 路由数组的**顺序**非常重要。
 * 所以此处的 `redirect` 这个条目在根路由中起到了定义各功能模块路由顺序的意义。
 *
 * ```typescript
 * const routes = [{
 *   path: 'home',
 *   component: HomeContainerComponent
 * }]
 * ```
 */

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'my', loadChildren: () => import('./my').then((m) => m.MyModule) },
  {
    path: 'category',
    loadChildren: () => import('./category').then((m) => m.CategoryModule),
  },
  {
    path: 'recommend',
    loadChildren: () => import('./recommend').then((m) => m.RecommendModule),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat').then((m) => m.ChatModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./product').then((m) => m.ProductModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./product').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
