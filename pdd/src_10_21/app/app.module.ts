import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';

@NgModule({
  // 声明我这个模块有哪些组件
  declarations: [AppComponent],
  // 我这个模块依赖什么其他模块
  imports: [BrowserModule, FormsModule, SharedModule],
  providers: [],
  entryComponents: [],
  // 引导组件是什么，首先呈现出来的页面是哪个
  bootstrap: [AppComponent],
})
export class AppModule {}
