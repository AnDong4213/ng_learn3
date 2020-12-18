import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskListComponent implements OnInit {
  form: FormGroup;
  dialogTitle: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewTaskListComponent>
  ) {}

  ngOnInit(): void {
    if (!this.data.name) {
      this.dialogTitle = '创建列表：';
    } else {
      this.dialogTitle = '修改列表：';
    }
  }

  onSubmit(ev: Event) {
    this.dialogRef.close(this.dialogTitle);
  }
}
