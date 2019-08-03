import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';

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

  getChallenges() {
    return this.firestore.collection("challenge").snapshotChanges();
  }

  updateChallenge(data, newScore, playerNumber) { 
    let hashWithNewValues = {};
    hashWithNewValues[playerNumber] = { score: newScore };

    return this.firestore
      .collection("challenge")
      .doc(data.payload.doc.id)
      .set(hashWithNewValues, { merge: true });
  }

  updateChallengeComplete(data) {
    return this.firestore
    .collection("challenge")
    .doc(data.payload.doc.id)
    .set({dateEnd: formatDate(new Date(), 'yyyy/MM/dd', 'en')}, { merge: true });
  }
  
}
