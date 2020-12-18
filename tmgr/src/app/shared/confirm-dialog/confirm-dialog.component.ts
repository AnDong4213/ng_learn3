import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmDialog {
  title: string;
  content: string;
  confirmAction: string;
}

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <span matDialogTitle>{{ dialog.title }}</span>
    <div matDialogContent>{{ dialog.content }}</div>
    <div matDialogActions>
      <button mat-raised-button color="primary" (click)="handleAction(true)">
        {{ dialog.confirmAction }}
      </button>
      <button
        mat-raised-button
        matDialogClose
        type="button"
        (click)="handleAction(false)"
      >
        关闭
      </button>
    </div>
  `,
  styles: [],
})
export class ConfirmDialogComponent implements OnInit {
  dialog: ConfirmDialog;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
    if (this.data.dialog !== undefined || this.data.dialog !== null) {
      this.dialog = this.data.dialog;
    }
  }

  ngOnInit(): void {}

  handleAction(result: boolean) {
    this.dialogRef.close(result);
  }
}
