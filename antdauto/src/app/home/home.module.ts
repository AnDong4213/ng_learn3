import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing.module';
import { MyComponent } from './components';

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule, HomeRoutes],
})
export class HomeModule {}
