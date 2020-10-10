import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTapComponent, ImageSliderComponent } from './components';
import { TestNgComponent } from './components/test-ng/test-ng.component';

@NgModule({
  // 声明我这个模块有哪些组件
  declarations: [AppComponent, ScrollableTapComponent, ImageSliderComponent],
  // 我这个模块依赖什么其他模块
  imports: [BrowserModule],
  providers: [],
  entryComponents: [],
  // 引导组件是什么，首先呈现出来的页面是哪个
  bootstrap: [AppComponent],
})
export class AppModule {}
