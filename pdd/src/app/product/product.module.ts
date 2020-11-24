import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ProductRoutingModule } from './product-routing.module';
import {
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent,
} from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
  ],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
