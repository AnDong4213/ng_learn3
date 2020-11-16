import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
