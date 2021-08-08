import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '@auth-app/domain/user';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {

  private userCollection: AngularFirestoreCollection<User>;
  private collectionName: string = 'users';

  constructor(private afs: AngularFirestore) {

  }

  getUsers(type: string = 'user'): Observable<User[]> {
    return this.afs.collection<User>(this.collectionName, ref =>
      ref.where('enabled', '==', true).where('userType', '==', type)
    ).valueChanges();
  }

  saveUser(user: User): Promise<void> {
    const refUsers = this.afs.collection(this.collectionName);
    if (user.uid === null || user.uid === undefined) {
      user.uid = this.afs.createId();
      // user.enabled = true;
    }

    return refUsers.doc(user.uid).set(Object.assign({}, user));
  }

  readUser(uid: string): Observable<User> {
    return this.userCollection.doc<User>(uid).valueChanges().pipe (
      take(1),
      map( (user: User) => {
        user.uid == uid;
        return user;
      })
    );
  }

  deleteUser(user: User): Promise<void> {
    // user.enable = false;
    return this.saveUser(user);
  }
}
