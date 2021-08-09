import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Session } from '@social/domain/session';
import { State } from '@social/domain/state';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { User } from '@auth-app/domain/user';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  user = new User();

  constructor(public afs: AngularFirestore,
    private authService: AuthenticationService) { }

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
    this.authService.getCurrentUser().then( (user: User) => {
      this.user = user;
    });
    const refSession = this.afs.collection("sessions");
    if(session.id == null){
      session.id = this.afs.createId();
      // session.uid = this.user.uid
      session.uid = "KV8Oo7PylzZkK3WeqZUE9I7CC3A2" // get user id
      session.state = "Pendiente";
      session.active = true
    }
    refSession.doc(session.id).set(Object.assign({}, session))
  }

  getSessions(): Observable<any[]>{
    return this.afs.collection("sessions",
          ref => ref.where("active","==",true)).valueChanges();
  }

  deleteSession(session: Session){
    const refSession = this.afs.collection("sessions");
    refSession.doc(session.id).delete();
  }
}
