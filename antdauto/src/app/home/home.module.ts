import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutes } from './home.routing.module';
import { MyComponent } from './components';

import { PublicCompComponent } from '../shared/components';

@NgModule({
  declarations: [MyComponent, PublicCompComponent],
  imports: [SharedModule, HomeRoutes],
  exports: [],
})
export class HomeModule {}
