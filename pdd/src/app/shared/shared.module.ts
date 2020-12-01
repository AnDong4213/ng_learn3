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
  BackButtonComponent,
} from './components';
import { AgoPipe } from './pipes';
import { DialogModule } from '../dialog';

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
    BackButtonComponent,
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
    DialogModule,
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
  ],
})
export class SharedModule {}
