import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { ToastController, ModalController } from '@ionic/angular';
import { RecoverPasswordPage } from '@auth-app/modals/recover-password/recover-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  private password: string;

  constructor(private authService: AuthenticationService,
    private toastController: ToastController,
    private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }

  loginWithEmail() {
    // console.log('Email: ' + this.user.email + ' Pass: ' + this.password);
    this.authService.emailPasswordLogin(this.user.email, this.password).then( (data) => {
        this.router.navigate(['/home']);
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Email o contraseña incorrectos';
      const colorCode = 'danger';
      this.showToast(msg, colorCode);
    });
  }

  loginWithGoogle() {
    this.authService.googleLogin().then( (data) => {
      this.router.navigate(['/home']);
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un error al iniciar sesión';
      const colorCode = 'danger';
      this.showToast(msg, colorCode);
    });
  }

  showToast(msg: string, colorCode: string) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      color: colorCode
    }).then(toast => toast.present());
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RecoverPasswordPage,
      // componentProps: {
      //   "paramID": 123,
      //   "paramTitle": "Test Title"
      // }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
