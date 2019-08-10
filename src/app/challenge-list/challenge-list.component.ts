import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmCompletedDialogComponent } from '../confirm-completed-dialog/confirm-completed-dialog.component';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  constructor(private challengeService:ChallengeService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getChallenges();
  }

  challenges;
  completedChallenges;
  inProgressChallenges;
  scoreValues = [0,1,2,3,4];

  getChallenges() {
    this.challengeService.getChallenges().subscribe(res => {
      this.challenges = res;
      this.completedChallenges = this.challenges.filter(challenge => challenge.payload.doc.data().dateEnd !== '');
      this.inProgressChallenges = this.challenges.filter(challenge => challenge.payload.doc.data().dateEnd === '');
    });
  }

  onScoreChange(scoreValue, challenge, playerNumber) {
    this.challengeService.updateChallenge(challenge, scoreValue, playerNumber);
  }

  completeChallenge(challenge) {
    const dialogRef = this.buildDialog();
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.challengeService.updateChallengeComplete(challenge);
      } 
    });
  }

  buildDialog() {
    return this.dialog.open(ConfirmCompletedDialogComponent, {
      width: '250px'
    });
  }

  readyToComplete(challenge) {
    return (challenge.payload.doc.data().playerOne.score === 4 || 
      challenge.payload.doc.data().playerTwo.score === 4);
  }
}
