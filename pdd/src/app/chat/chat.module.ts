import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, ChatRoutingModule],
})
export class ChatModule {}
