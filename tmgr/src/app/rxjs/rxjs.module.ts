import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRxjsRoutingModule } from './rxjs-routing.module';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';

@NgModule({
  declarations: [RxjsHomeComponent, RxjsLearnComponent],
  imports: [CommonModule, AppRxjsRoutingModule],
})
export class RxjsModule {}
