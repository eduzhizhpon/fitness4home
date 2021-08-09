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

  constructor(public afs: AngularFirestore,
    private authService: AuthenticationService) { }

  saveState(state: State){
    this.authService.getCurrentUser().then( (user: User) => {
      const refState = this.afs.collection("states");
      if(state.id == null){
        state.id = this.afs.createId();
        state.uname = user.name;
        state.active = true
      }
      refState.doc(state.id).set(Object.assign({}, state))
    });
  }

  getStates(): Observable<any[]>{
    return this.afs.collection("states",
          ref => ref.where("active","==",true)).valueChanges();
  }

  saveSession(session: Session){
    this.authService.getCurrentUser().then( (user: User) => {
      const refSession = this.afs.collection("sessions");
      if(session.id == null){
        session.id = this.afs.createId();
        session.uid = user.uid;
        session.state = "Pendiente";
        session.active = true;
      }
      refSession.doc(session.id).set(Object.assign({}, session));
    });
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
