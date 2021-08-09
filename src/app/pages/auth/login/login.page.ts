import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { ToastController } from '@ionic/angular';

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
    this.authService.googleLogin().then( (userGoogle) => {
      console.log('USERGOOGE', userGoogle)
      this.authService.getCurrentUser().then( (user: User) => {
        if (user) {
          this.router.navigate(['/home']);
        } else {
          this.showToast("Regístrese para acceder al sistema", "primary");
          this.router.navigate(['/auth/register']);
          
        }
      });
      
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

}
