import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service'

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  constructor(private challengeService:ChallengeService) { }

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

  onScoreChange(scoreValue) {
    console.log(scoreValue);
  }
}
