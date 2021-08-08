import { Component, OnInit } from '@angular/core';

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

  constructor(private authService: AuthenticationService,
    private toastController: ToastController) { }

  ngOnInit() {
    this.user = new User();
  }

  userTypeChanged(ev: any) {
    console.log('Type changed', ev.detail.value);
    this.user.userType = ev.detail.value;
  }

  registerUserEmail(){
    console.log(this.user);
    if (this.user.userType != null){
      this.authService.signupUser(this.user).then( (data) => {
        console.log(data);
      }).catch( (reason: any) => {
        const msg = '[ERROR]: ' + JSON.stringify(reason);
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
