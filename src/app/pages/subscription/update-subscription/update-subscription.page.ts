import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-subscription',
  templateUrl: './update-subscription.page.html',
  styleUrls: ['./update-subscription.page.scss'],
})
export class UpdateSubscriptionPage implements OnInit {

  subscriptionTier: string;
  currentSubscriptionTier: string;
  enableFeedback: boolean;

  constructor(public alertController: AlertController, private router: Router) {
    this.enableFeedback = false;
  }

  ngOnInit() {
    this.currentSubscriptionTier = '1';
    this.subscriptionTier = this.currentSubscriptionTier;
  }

  setSubscriptionTier(event: string): void {
    this.subscriptionTier = event;
  }

  onUpdateSubscribe(): void {
    this.enableFeedback = true;
    console.log(this.subscriptionTier);
  }

  onCancelSubscribe(): void {
    this.presentAlertConfirm().then( (role) => {
      if (role === 'accept') {
        this.cancelSubscription();
      }
    });
  }

  cancelSubscription(): void {
    console.log('Se cancela la subscripción');
    this.router.navigate(['subscription-update/cancel']);
  }

  async presentAlertConfirm(): Promise<string> {
    const alert = await this.alertController.create({
      cssClass: 'confirm-dialog',
      header: 'Confirmación',
      message: '¿Está seguro que desea cancelar la Subscripción?',
      buttons: [
        {
          text: 'Regresar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Acceptar',
          role: 'accept'
        }
      ]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    return role;
  }

  onRouterHome(): void {
    console.log('Ir al Home');
    this.router.navigate(['/home']);
  }

}
