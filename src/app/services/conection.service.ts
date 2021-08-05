import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Session } from '../domain/session';
import { State } from '../domain/state';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(public afs: AngularFirestore) { }

  saveState(state: State){
    const refState = this.afs.collection("states");
    if(state.id == null){
      state.id = this.afs.createId();
      state.active = true
    }
    refState.doc(state.id).set(Object.assign({}, state))
  }

  getStates(): Observable<any[]>{
    return this.afs.collection("states",
          ref => ref.where("active","==",true)).valueChanges();
  }

  saveSession(session: Session){
    const refSession = this.afs.collection("sessions");
    if(session.id == null){
      session.id = this.afs.createId();
      session.active = true
    }
    refSession.doc(session.id).set(Object.assign({}, session))
  }

  getSessions(): Observable<any[]>{
    return this.afs.collection("sessions",
          ref => ref.where("active","==",true)).valueChanges();
  }
}
