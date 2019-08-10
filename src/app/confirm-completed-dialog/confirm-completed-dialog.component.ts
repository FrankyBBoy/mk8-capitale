import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-completed-dialog',
  templateUrl: './confirm-completed-dialog.component.html',
  styleUrls: ['./confirm-completed-dialog.component.scss']
})
export class ConfirmCompletedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmCompletedDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
