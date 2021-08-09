import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  currentModal = null;
  email: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async createModal() {
    const modal = await this.modalController.create({
      component: 'modal-content'
    });

    await modal.present();
    this.currentModal = modal;
  }

  dismissModal() {
    if (this.currentModal) {
      this.currentModal.dismiss().then(() => { this.currentModal = null; });
    }
  }

  recoverPassword(){
    console.log('entra: ', this.email);
  }

}
