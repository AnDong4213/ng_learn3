import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
