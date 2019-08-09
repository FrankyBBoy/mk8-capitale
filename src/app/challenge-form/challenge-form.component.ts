import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service'
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmNewChallengeDialogComponent } from '../confirm-new-challenge-dialog/confirm-new-challenge-dialog.component';


@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss']
})
export class ChallengeFormComponent implements OnInit {

  constructor(private challengeService:ChallengeService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {}

  playersNameList = ['Crispo', 'Brunet', 'Alexandre', 'Pier-Luc', 'Lafond', 'Maxime', 'Simon', 'Benoit', 'Paquet'];

  onSubmit() {
    if (this.formIsValid(this.challengeService.form)) {
      const dialogRef = this.buildDialog();
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Creation du challenges...');
          let data = this.buildData();

          this.challengeService.createChallenge(data).then(res => {
            this.challengeService.form.reset();
            this.router.navigate(['/challenges']);
          });
        } 
      });
    } else {
      console.log('Challenge invalide!');
    }
  }

  formIsValid(form: FormGroup) {
    return form.value.playerOneName !== '' && 
      form.value.playerTwoName !== '' &&
      form.value.playerOneName !== form.value.playerTwoName;
  }

  buildData() {
    return {'playerOne': 
              {'name': this.challengeService.form.value.playerOneName,
              'score': 0},
            'playerTwo':
              {'name': this.challengeService.form.value.playerTwoName,
              'score': 0},
            'dateStart': formatDate(new Date(), 'yyyy/MM/dd', 'en'),
            'dateEnd': ''};
  }

  buildDialog() {
    return this.dialog.open(ConfirmNewChallengeDialogComponent, {
      width: '250px',
      data: {playerOneName: this.challengeService.form.value.playerOneName, 
            playerTwoName: this.challengeService.form.value.playerTwoName}
    });
  }
}
