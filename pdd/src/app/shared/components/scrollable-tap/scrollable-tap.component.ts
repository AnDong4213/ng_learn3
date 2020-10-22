import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
  id: number;
}

@Component({
  selector: 'app-scrollable-tap',
  templateUrl: './scrollable-tap.component.html',
  styleUrls: ['./scrollable-tap.component.css'],
})
export class ScrollableTapComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  selectedIndex = -1;
  // trackByFn = (index, menu) => menu.title;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  /**
   * 第一个执行，构造函数是建立这个类的实例
   * 之所以我们没有显性的使用 new ScrollableTabComponent()
   * 是因为系统框架帮我们做了这个，这是依赖注入的概念
   */
  constructor() {
    // console.log('构造函数');
  }

  /**
   * 组件的 `@Input` 属性变化时调用
   * @param changes 一个索引对象，用以体现变化之前和当前的值
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('输入变化', changes);
  }

  ngOnInit(): void {
    // console.log('组件初始化');
  }

  // 要监控 ngOnChanges() 无法捕获的变更，你可以实现自己的变更检查逻辑，比如 DoCheck 的例子。如何使用 ngDoCheck() 钩子来检测和处理 Angular 自己没有捕捉到的变化。
  // 自定义变更检测逻辑，但却非常昂贵，如果使用这个钩子，那么你的实现必须非常轻量级，否则会损害用户体验
  ngDoCheck(): void {
    // console.log('组件脏值检测');
  }

  ngAfterContentInit(): void {
    // console.log('标签<ng-content>里的内容加载完成后，初始化');
  }

  ngAfterContentChecked(): void {
    // console.log('组件脏值检测，标签<ng-content>里的内容加载完成');
  }

  ngAfterViewInit(): void {
    // console.log('当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用');
  }

  ngAfterViewChecked(): void {
    // console.log('组件脏值检测，每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用')
  }

  ngOnDestroy(): void {
    console.log('组件销毁...');
  }

  trackByFn(index, menu) {
    return menu.title; // or index
  }

  handleSelection(index: number, menu: TopMenu) {
    this.selectedIndex = index;
    this.tabSelected.emit(menu);
  }
}
