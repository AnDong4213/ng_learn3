import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import {
  WxComponent,
  WxAuComponent,
  WxCommonCompComponent,
} from './components';

@NgModule({
  declarations: [WxComponent, WxAuComponent, WxCommonCompComponent],
  imports: [CommonModule, ChatRoutingModule],
  exports: [WxCommonCompComponent],
})
export class ChatModule {}
