import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../domain/user';

import { ToastController } from '@ionic/angular';

import { LocationService } from '../services/location.service';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { UserFirebaseService } from '@social/services/user-firebase.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit {

  zoom = 15;
  lat = -2.902084;
  lng = -79.024752;
  currentLocation: any;
  centerLocation: any = {
    latitude: -2.902084,
    longitude: -79.024752
  };

  icons = {
    pointer: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png'
  };

  userFlag: boolean;
  user: User = new User();
  imgData: any;
  profilePhotoURL: string;
  provider: string;
  private password: string;

  constructor(private locationService: LocationService,
    private authService: AuthenticationService,
    private ufb: UserFirebaseService,

    private router: Router, private route: ActivatedRoute,
    private toastController: ToastController) {

      route.queryParams.subscribe( (params) => {
        this.user = new User();
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.user = this.router.getCurrentNavigation().extras.queryParams.user;
        }
        this.provider = params.provider;
        this.password = params.password;
        this.userFlag = (this.user.userType === 'user') ? true : false;
      });
      this.setDefaultProfilePhoto();
  }

  async ngOnInit() { }

  setDefaultProfilePhoto(){
    if (this.user.profilePhoto == null || this.user.profilePhoto === undefined) {
      this.profilePhotoURL = './assets/icon/user.png';
    }
  }

  newAddress(event: any) {
    if (event) {
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      this.user.homeLatitude = event.lat;
      this.user.homeLongitude = event.lng;
      this.locationService.getAddressOfLocation(this.centerLocation);
    }
  }

  imageSelectedEvt(data: any) {
    this.imgData = data;
  }

  uploadFinishedEvt(data: any) {
    this.profilePhotoURL = data.url;
    this.user.profilePhoto = this.profilePhotoURL;
  }

  completeProfile() {
    console.log('Complete Profile');
    this.user.tier = 0;
    if (this.provider === 'email') {
      this.continueWithEmail();
    } else {
      this.continueWithGoogle();
    }
  }

  continueWithEmail() {
    console.log(this.user.email, '|' + this.password)
    this.authService.emailPasswordLogin(this.user.email, this.password).then( (user) => {
        console.log(user);
        this.user.uid = user.uid;
        this.user.enabled = true;
        this.user.tier = 0;
        this.authService.updateUserData(this.user, this.provider).then( (data) => {
          if (this.user.userType === 'user') {
            this.router.navigate(['/subscription']);
          } else if (this.user.userType === 'coach-tmp') {
            this.router.navigate(['/home']);
          }
      }).catch( (reason) => {
        console.log(reason);
        const msg = 'No se ha podido obtener el usuario';
        const colorCode = 'danger';
        this.showToast(msg, colorCode, 3500);
      });
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un error al iniciar sesión';
      const colorCode = 'danger';
      this.showToast(msg, colorCode, 3500);
    });
  }

  continueWithGoogle() {

    this.ufb.saveUser(this.user).then( () => {
      this.authService.getCurrentUser().then( (user) => {
        if (user) {
          if (this.user.userType === 'user') {
            this.router.navigate(['/subscription']);
          } else if (this.user.userType === 'coach-tmp') {
            this.router.navigate(['/home']);
          }
        }
      }).catch( (reason) => {
        this.showToast(JSON.stringify(reason), 'primary');
      })
      
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un error al actualizar el perfil con Google';
      const colorCode = 'danger';
      this.showToast(msg, colorCode, 3500);
    });
  }

  showToast(msg: string, colorCode: string, durationMsg: number = 2000) {
    this.toastController.create({
      message: msg,
      duration: durationMsg,
      color: colorCode
    }).then(toast => toast.present());
  }

}
