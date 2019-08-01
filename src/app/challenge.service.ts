import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor( private firestore: AngularFirestore ) { }
  form = new FormGroup({        
      playerOneName: new FormControl(''),
      playerTwoName: new FormControl('')
  })

  createChallenge(data) {
      return new Promise<any>((resolve, reject) =>{
          this.firestore
              .collection("challenge")
              .add(data)
              .then(res => {}, err => reject(err));
      });
  }
  
}
