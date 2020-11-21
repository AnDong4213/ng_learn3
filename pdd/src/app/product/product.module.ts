import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './components';

@NgModule({
  declarations: [ProductContainerComponent],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
