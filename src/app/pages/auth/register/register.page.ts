import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { UserFirebaseService } from '@social/services/user-firebase.service';

import { User } from '../domain/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  selectRole: any;

  user: User;
  isAnUser: boolean;
  private password: string;

  constructor(private authService: AuthenticationService,
    private toastController: ToastController, private ufb: UserFirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  userTypeChanged(ev: any) {
    this.user.userType = ev.detail.value;
    if (this.user.userType === 'user') {
      this.isAnUser = true;
    } else {
      this.isAnUser = false;
    }
  }

  registerUserEmail(){
    if (this.user.userType != null){
      this.authService.signupUser(this.user, this.password).then( (data) => {
        const params: NavigationExtras = {
          queryParams: {
            user: this.user,
            password: this.password,
            provider: 'email'
          }
        };
        this.router.navigate(['/auth/complete-profile'], params);
      }).catch( (reason: any) => {
        const msg = 'Ha ocurrido un error: ' + reason.message;
        const colorCode = 'danger';
        this.showToast(msg, colorCode);
      });
    } else {
      this.showToast('Elija primero el tipo de usuario', 'danger');
    }
  }

  registerUserGoogle(){
    if (this.user.userType != null) {
      this.authService.googleLogin().then( (userGoogle) => {
        this.user.uid = userGoogle.uid;
        this.user.email = userGoogle.email;
        this.user.enabled = true;
        this.user.tier = 0;
        const params: NavigationExtras = {
          queryParams: {
            user: this.user,
            password: this.password,
            provider: 'google'
          }
        };
        this.router.navigate(['/auth/complete-profile'], params);
      }).catch( (reason) => {
        const msg = 'Ha ocurrido un error: ' + reason.message;
        const colorCode = 'danger';
        this.showToast(msg, colorCode);
      });
    } else {
      this.showToast('Elija primero el tipo de usuario', 'danger');
    }
  }

  showToast(msg: string, colorCode: string) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      color: colorCode
    }).then(toast => toast.present());
  }

}
