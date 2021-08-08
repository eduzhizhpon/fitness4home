import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  userTypeChanged(ev: any) {
    console.log('Type changed', ev.detail.value);
    this.user.userType = ev.detail.value;
    if (this.user.userType === 'user') {
      this.isAnUser = true;
    } else {
      this.isAnUser = false;
    }
  }

  registerUserEmail(){
    console.log(this.user);
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

  showToast(msg: string, colorCode: string) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      color: colorCode
    }).then(toast => toast.present());
  }

}
