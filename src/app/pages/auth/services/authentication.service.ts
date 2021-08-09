/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, first, take, map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { GooglePlus } from '@ionic-native/google-plus/ngx';

import * as firebase from 'firebase/app';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user: Observable<any>;

  constructor( private afAuth: AngularFireAuth,
               private afs: AngularFirestore,
               private platform: Platform,
               private googlePlus: GooglePlus) {

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user){
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async getCurrentUser(): Promise<any> {
    return this.user.pipe(first()).toPromise();
  }

  async signupUser(newUser: User, password: string): Promise<any> {
    try {
      return this.afAuth.createUserWithEmailAndPassword(newUser.email, password);
      // const user = await this.afAuth.currentUser;

      // return await user.updateProfile({
      //   photoURL: 'https://goo.gl/7kz9qG'
      // });

    } catch (error) {
      console.error('Error' + JSON.stringify(error));
      return error;
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      return error;
    }
  }

  async logout(): Promise<any> {
    return this.afAuth.signOut();
  }

  /********** LOGIN WITH GOOGLE */
  async googleLogin() {
    if (this.platform.is('cordova')) {
      return await this.nativeGoogleLogin();
    } else {
      return await this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<void>  {
    try {
      const gplusUser: any = await this.googlePlus.login({
        webClientId: environment.googleWebClientId,
        offline: true
      });

      const googleCredential = firebase.default.auth.GoogleAuthProvider.credential(gplusUser.idToken);
      const firebaseUser = await firebase.default.auth().signInWithCredential(googleCredential);
      console.log(JSON.stringify(firebaseUser.user));
      return await this.updateUserData(firebaseUser.user, 'google');
    } catch (error) {
      console.error('Error: Login Google - Native' + JSON.stringify(error));
      return error;
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.default.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      return await this.updateUserData(credential.user, 'google');
    } catch (error) {
      console.error('Error: Login Google - Web' + JSON.stringify(error));
      return error;
    }
  }

  /***** LOGIN WITH EMAIL */
  async emailPasswordLogin(email: string, password: string): Promise<void> {
    try {
      const emailCredential = firebase.default.auth.EmailAuthProvider.credential(email, password);
      const firebaseUser = await firebase.default.auth().signInWithCredential(emailCredential);
      return await this.updateUserData(firebaseUser.user, 'email');
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // ---------
  userExists(email: string) {
    console.log('userExists - Email: ' + email);
    return this.afs
    .collection('users', ref => ref.where('email', '==', email))
    .valueChanges()
    .pipe(first())
    .toPromise();
  }

  // Guardar los datos del usuario en Firestore
  async updateUserData(usertemp: any, provider: any){
    console.log('update - Datos: ' + JSON.stringify(usertemp));
    const doc: any = await this.userExists(usertemp.email);
    console.log('doc - Datos Doc: ' + JSON.stringify(doc));

    let data: any;
    const user: any = JSON.parse(JSON.stringify(usertemp));

    console.log('doc Doc Despues : ' + JSON.stringify(doc));

    if (doc == null || doc == '') {
      // Crear Cuenta
      data = {
        uid: user.uid,
        userType: user.userType || '',
        email: user.email || null,
        profilePhoto: user.photoURL || './assets/icon/user.png',
        name: user.displayName || user.name || '',
        lastname: user.lastname || '',
        birthday: user.birthday || '',
        phoneNumber: user.phoneNumber || '',
        weight: user.weight || '',
        height: user.height || '',
        homeLatitude: user.homeLatitude || '',
        homeLongitude: user.homeLongitude || '',
        zoomIdMeeting: user.zoomIdMeeting || '',
        zoomPasswordMeeting: user.zoomPasswordMeeting || '',
        enabled: true,
        provider,
        lastLogin: new Date(),
        createdAt: new Date()
      };
    } else if (doc.active == false){
      // eslint-disable-next-line no-throw-literal
      throw {
              errorCode: 999,
              errorMessage: 'Acceso denegado, servicio deshabilitado, consulte con el administrador.'
            };
    } else {
      // Actualizar cuenta
      data = {
        uid: user.uid,
        userType: user.userType || '',
        email: user.email || null,
        profilePhoto: user.photoURL || './assets/icon/user.png',
        name: user.displayName || user.name || '',
        lastname: user.lastname || '',
        birthday: user.birthday || '',
        phoneNumber: user.phoneNumber || '',
        weight: user.weight || '',
        height: user.height || '',
        homeLatitude: user.homeLatitude || '',
        homeLongitude: user.homeLongitude || '',
        zoomIdMeeting: user.zoomIdMeeting || '',
        zoomPasswordMeeting: user.zoomPasswordMeeting || '',
        enabled: user.enabled,
        provider,
        lastLogin: new Date(),
      };
    }

    console.log('data previo: ', JSON.stringify(data));

    const userRef = this.afs.collection<any>('users');

    // if (data.uid == null || data.uid == undefined){
    //   data.uid = this.afs.createId();
    // }

    // console.log('data despues: ', JSON.stringify(data));

    return userRef.doc(`${data.uid}`).set(data, { merge: true});
  }
}
