import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  HorizontalGridComponent,
  ImageSliderComponent,
  ScrollableTapComponent,
  CountDownComponent,
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent,
  ProductTileComponent,
} from './components';
import { AgoPipe } from './pipes';

import {
  GridItemDirective,
  GridItemTitleDirective,
  GridItemImageDirective,
  TagDirective,
  AvatarDirective,
} from './directives';

@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
  ],
})
export class SharedModule {}
