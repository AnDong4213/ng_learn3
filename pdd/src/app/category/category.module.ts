import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './components';

@NgModule({
  declarations: [CategoryContainerComponent],
  imports: [SharedModule, CategoryRoutingModule],
})
export class CategoryModule {}
