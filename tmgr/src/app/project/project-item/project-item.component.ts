import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
import { cardAnim } from '../../anims';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() itemSelected = new EventEmitter<void>();
  @Output() launchUpdateDialog = new EventEmitter<void>();
  @Output() launchInviteDailog = new EventEmitter<void>();
  @Output() launchDeleteDailog = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  onClick(ev: Event) {
    ev.preventDefault();
    this.itemSelected.emit();
  }

  openUpdateDialog(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchUpdateDialog.emit();
  }

  openInviteDialog(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchInviteDailog.emit();
  }

  openDeleteDialog(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchDeleteDailog.emit();
  }
}
