import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  openSidebar() {
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    // console.log('e', checked);
    this.toggleDarkTheme.emit(checked);
  }
}
