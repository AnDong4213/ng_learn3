import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent implements OnInit, OnDestroy {
  form: FormGroup;
  dialogTitle: string = '创建任务：';
  notConfirm = true;
  delInvisible = true;
  priorities: { label: string; value: number }[] = [
    {
      label: '普通',
      value: 3,
    },
    {
      label: '重要',
      value: 2,
    },
    {
      label: '紧急',
      value: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(a, b) {}

  onDelClick(b) {}

  reallyDel() {}

  ngOnDestroy() {}
}
