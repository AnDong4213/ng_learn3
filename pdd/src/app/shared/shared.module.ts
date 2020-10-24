import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  HorizontalGridComponent,
  ImageSliderComponent,
  ScrollableTapComponent,
} from './components';
import { AgoPipe } from './pipes';

import {
  GridItemDirective,
  GridItemTitleDirective,
  GridItemImageDirective,
} from './directives';

@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    AgoPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    AgoPipe,
  ],
})
export class SharedModule {}
