import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCompComponent } from './components';

@NgModule({
  declarations: [SharedCompComponent],
  imports: [CommonModule],
  exports: [CommonModule, SharedCompComponent],
})
export class SharedModule {}
