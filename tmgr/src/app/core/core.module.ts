import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent], // 只是声明了，而没有导出，没有导出的话只能在本module中使用，在其他module不能使用，在app.component.html中不能使用，需要在exports中做导出
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载!');
    }
    loadSvgResources(ir, ds);
  }
}

// core.module只在系统中加载一次，怎么弄
// SkipSelf去系统的我的父级寻找我的依赖
// Optional这个依赖是可选的
