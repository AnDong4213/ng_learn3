import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  WxComponent,
  WxAuComponent,
  WxCommonCompComponent,
} from './components';

@NgModule({
  declarations: [WxComponent, WxAuComponent, WxCommonCompComponent],
  imports: [SharedModule, ChatRoutingModule],
  exports: [WxCommonCompComponent],
})
export class ChatModule {}
