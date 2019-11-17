import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-new-challenge-dialog',
  templateUrl: './confirm-new-challenge-dialog.component.html',
  styleUrls: ['./confirm-new-challenge-dialog.component.scss']
})
export class ConfirmNewChallengeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmNewChallengeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  playerOneName: string;
  playerTwoName: string;
}
