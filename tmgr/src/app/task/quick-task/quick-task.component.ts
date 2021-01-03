import {
  Component,
  OnInit,
  HostListener,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickTaskComponent implements OnInit {
  desc: string;
  @Output() quickTask = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit({ value, valid }, ev: Event) {
    console.log('form', value, valid);
    console.log('ev', ev);
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if (
      !this.desc ||
      this.desc.length === 0 ||
      !this.desc.trim() ||
      this.desc.length > 20
    ) {
      return;
    }
    this.quickTask.emit(this.desc);
    this.desc = '';
  }
}
