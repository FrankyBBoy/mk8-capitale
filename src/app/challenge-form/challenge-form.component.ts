import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service'
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss']
})
export class ChallengeFormComponent implements OnInit {

  constructor(private challengeService:ChallengeService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let data = {'playerOne': 
                {'name': this.challengeService.form.value.playerOneName,
                 'score': 0},
                'playerTwo':
                  {'name': this.challengeService.form.value.playerTwoName,
                   'score': 0},
                'dateStart': formatDate(new Date(), 'yyyy/MM/dd', 'en'),
                'dateEnd': ''};
  
    this.challengeService.createChallenge(data).then(res => {
      // TODO handle succès ou echec de l'insert et redirect
      this.router.navigate(['/challenges']);
    });
  }

}
