import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';

const routes: Routes = [{ path: 'rxjs', component: RxjsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRxjsRoutingModule {}
