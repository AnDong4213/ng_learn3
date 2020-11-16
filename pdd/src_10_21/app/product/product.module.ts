import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
