import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ProductRoutingModule } from './product-routing.module';
import {
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent,
  ProductVariantDialogComponent,
} from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductVariantDialogComponent,
    GroupItemComponent,
    GroupShortListComponent,
  ],
  imports: [SharedModule, ProductRoutingModule],
  // angualr所有的组件都是通过组件工厂去构造的，所有的组件都在被引用(标签引用，ProductVariantDialogComponent没有任何地方标签引用)，所以加到entryComponents数组当中去，动态出来的效果的放到entryComponents中去
  // entryComponents: [ProductVariantDialogComponent],
})
export class ProductModule {}
