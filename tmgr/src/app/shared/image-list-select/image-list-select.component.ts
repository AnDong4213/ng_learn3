import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  FormControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // providers 数组展示了你可以如何使用其它的键来定义提供者：useValue、useClass、useExisting 或 useFactory。
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true,
    },
  ],
})
export class ImageListSelectComponent implements OnInit, ControlValueAccessor {
  selected: string;
  @Input() title = '选择封面：';
  @Input() items: string[] = [];
  @Input() cols = 8;
  @Input() rowHeight = '64px';
  @Input() itemWidth = '80px';
  @Input() useSvgIcon = false;
  @Output() itemChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // 这里是做一个空函数体，真正使用的方法在 registerOnChange 中
  // 由框架注册，然后我们使用它把变化发回表单
  // 注意，和 EventEmitter 尽管很像，但发送回的对象不同
  private propagateChange = (_: any) => {};

  // 写入控件值 E.g(for example) this.form = this.fb.group({}) set初始值
  public writeValue(obj: any): void {
    if (obj && obj !== '') {
      this.selected = obj;
    }
  }

  // 当表单控件值改变时，函数 fn 会被调用
  // 这也是我们把变化 emit 回表单的机制
  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  // 这里没有使用，用于注册 touched 状态
  registerOnTouched(fn: any): void {}

  // 验证表单，如果正确返回null, 否则返回一个验证结果对象
  public validate(c: FormControl) {
    return this.selected
      ? null
      : {
          imageListSelect: {
            valid: false,
          },
        };
  }

  // 列表元素选择发生改变触发
  onChange(i: number) {
    this.selected = this.items[i];

    // 更新表单
    this.propagateChange(this.items[i]);
    this.itemChange.emit(this.items[i]);
  }
}
