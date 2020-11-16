import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { BSiteComponent, ParentRxjsComponent } from './components';

@NgModule({
  declarations: [BSiteComponent, ParentRxjsComponent],
  imports: [CommonModule, RxjsRoutingModule],
})
export class RxjsModule {}
