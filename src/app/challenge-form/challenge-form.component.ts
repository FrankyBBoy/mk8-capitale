import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service'

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss']
})
export class ChallengeFormComponent implements OnInit {

  constructor(private challengeService:ChallengeService) { }

  ngOnInit() {
  }

  onSubmit() {
    let data = this.challengeService.form.value;

    this.challengeService.createChallenge(data).then(res => {
        alert('ok!');
    });
  }

}
