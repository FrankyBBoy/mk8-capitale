import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service'
import { AppConstant } from '../shared/app-constant'

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  constructor(private challengeService:ChallengeService) { }

  challenges;
  statsData;
  displayedColumns: string[] = ['position', 'playerName', 'win', 'loss'];

  ngOnInit() {
    this.buildStatsData();
  }

  buildStatsData() {
    this.challengeService.getChallenges().subscribe(res => { 
      this.challenges = res;
      this.statsData = [];

      AppConstant.PLAYERS_NAME_LIST.forEach( (playerName) => {
        this.statsData.push( {position: 1, 
                              playerName: playerName, 
                              win: this.winCount(playerName), 
                              loss: this.lossCount(playerName)} );
      });

    });
  }

  winCount(playerName) {
    return this.challenges.filter(challenge => this.hasWinnedTheChallenge(challenge, playerName)).length;
  }

  hasWinnedTheChallenge(challenge, playerName) {
    return ((challenge.payload.doc.data().playerOne.name === playerName && challenge.payload.doc.data().playerOne.score === 4) ||
            (challenge.payload.doc.data().playerTwo.name === playerName && challenge.payload.doc.data().playerTwo.score === 4));
  }

  lossCount(playerName) {
    return this.challenges.filter(challenge => this.hasLostTheChallenge(challenge, playerName)).length;
  }

  hasLostTheChallenge(challenge, playerName) {
    return ((challenge.payload.doc.data().playerOne.name === playerName && challenge.payload.doc.data().playerOne.score < 4) ||
            (challenge.payload.doc.data().playerTwo.name === playerName && challenge.payload.doc.data().playerTwo.score < 4));
  }

}
