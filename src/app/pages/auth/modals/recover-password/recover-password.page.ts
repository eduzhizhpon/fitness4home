import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  currentModal = null;
  email: string;

  constructor(private modalController: ModalController,
    private toastController: ToastController,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  async createModal() {
    const modal = await this.modalController.create({
      component: 'modal-content'
    });

    await modal.present();
    this.currentModal = modal;
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  recoverPassword(){
    // console.log('entra: ', this.email);
    this.authService.resetPassword(this.email).then( () => {
      const msg = 'El correo se ha enviado con éxito';
      const colorCode = 'success';
      this.showToast(msg, colorCode);
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un problema, no se ha podido enviar el correo';
      const colorCode = 'danger';
      this.showToast(msg, colorCode);
    });
  }

  showToast(msg: string, colorCode: string) {
    this.toastController.create({
      message: msg,
      duration: 2500,
      color: colorCode
    }).then(toast => toast.present());
  }

}
