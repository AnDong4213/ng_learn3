import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss'],
})
export class CopyTaskComponent implements OnInit {
  form: FormGroup;
  lists: [];
  dialogTitle: string = '移动所有任务';

  constructor(
    // private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<CopyTaskComponent>
  ) {}

  ngOnInit(): void {
    // console.log('data', this.data);
    this.lists = this.data.lists;
  }

  onSubmit(a, b) {}
}
