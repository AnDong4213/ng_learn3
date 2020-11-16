import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { MyRoutingModule } from './my-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, MyRoutingModule],
})
export class MyModule {}
