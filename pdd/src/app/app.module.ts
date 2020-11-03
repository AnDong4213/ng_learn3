import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';

import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';

@NgModule({
  // 声明我这个模块有哪些组件
  declarations: [AppComponent],
  // 我这个模块依赖什么其他模块
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    // 注意如果不是懒加载，一定要在根模块中导入功能模块
    // 才能使子路由导入进来，路由也才可以成功
    HomeModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
    },
  ],
  entryComponents: [],
  // 引导组件是什么，首先呈现出来的页面是哪个
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
