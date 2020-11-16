import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { HomeRoutingModule } from './home-routing.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
  ChildComponent,
  ParentComponent,
} from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ChildComponent,
    ParentComponent,
  ],
  providers: [
    // 传统写法，如果采用这种写法，就不能在 service 中写 `providedIn`
    // HomeService,
    { provide: token, useValue: 'http://localhost9911--00' },
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
