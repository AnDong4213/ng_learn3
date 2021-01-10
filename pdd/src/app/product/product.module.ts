import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ProductRoutingModule } from './product-routing.module';
import {
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent,
  ProductVariantDialogComponent,
  ProductAmountComponent,
  ConfirmOrderComponent,
  PaymentComponent,
} from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductVariantDialogComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductAmountComponent,
    ConfirmOrderComponent,
    PaymentComponent,
  ],
  imports: [SharedModule, ProductRoutingModule],
  // angualr所有的组件都是通过组件工厂去构造的，所有的组件都在被引用(标签引用，ProductVariantDialogComponent没有任何地方标签引用)，所以加到entryComponents数组当中去，动态出来的效果的放到entryComponents中去
  entryComponents: [ProductVariantDialogComponent], // 以前，NgModule 定义中的 entryComponents 数组用于告诉编译器将动态创建和插入哪些组件。改用 Ivy 后，将不再需要它们，并且可以从现有模块声明中删除 entryComponents 数组。ANALYZE_FOR_ENTRY_COMPONENTS 注入令牌也是如此。
})
export class ProductModule {}
