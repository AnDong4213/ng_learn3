import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() itemSelected = new EventEmitter<void>();
  @Output() launchUpdateDialog = new EventEmitter<void>();
  @Output() launchInviteDailog = new EventEmitter<void>();
  @Output() launchDeleteDailog = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick(e) {}

  openUpdateDialog(e) {}

  openInviteDialog(ev: Event) {
    this.launchInviteDailog.emit();
  }

  openDeleteDialog(e) {}
}
