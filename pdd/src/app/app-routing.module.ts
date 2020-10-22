import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './home';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
