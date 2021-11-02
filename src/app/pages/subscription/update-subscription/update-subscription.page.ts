import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { AlertController, ToastController } from '@ionic/angular';
import { UserFirebaseService } from '@social/services/user-firebase.service';
import { TierManageService } from '@subscription/services/tier-manage.service';

@Component({
  selector: 'app-update-subscription',
  templateUrl: './update-subscription.page.html',
  styleUrls: ['./update-subscription.page.scss'],
})
export class UpdateSubscriptionPage implements OnInit {

  subscriptionTier: string;
  currentSubscriptionTier: string;
  enableFeedback: boolean;

  nextBill: Date;

  constructor(private authService: AuthenticationService, private ufb: UserFirebaseService,
    private toastController: ToastController, private tierManageService: TierManageService,
    public alertController: AlertController, private router: Router) {
    this.enableFeedback = false;
  }

  async ngOnInit() {
    await this.authService.getCurrentUser().then( (user: any) => {
      this.currentSubscriptionTier = user.tier + "";
      this.subscriptionTier = this.currentSubscriptionTier;
      if (user.tier === 0 && user.enabled === true) {
        this.router.navigate(['subscription-update/cancel']);
      } else if (user.enabled === false) {
        this.router.navigate(['/auth/login']);
      }
    }).catch( () => {
      this.router.navigate(['/auth/login']);
    });
  }

  setSubscriptionTier(event: string): void {
    this.subscriptionTier = event;
  }

  onUpdateSubscribe(): void {
    this.authService.getCurrentUser().then( (user: User) => {
      user.tier =  +this.subscriptionTier;
      user.nextBill = this.tierManageService.getNextBill(new Date(), user.tier);
      this.nextBill = user.nextBill;
      this.ufb.saveUser(user).then( (data) => {
        this.enableFeedback = true;
      });
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un error al actualizar el plan de subscripión';
      const colorCode = 'danger';
      this.showToast(msg, colorCode, 3500);
    });
    console.log(this.subscriptionTier);
  }

  onCancelSubscribe(): void {
    this.presentAlertConfirm().then( (role) => {
      if (role === 'accept') {
        this.cancelSubscription();
      }
    });
  }

  async cancelSubscription(): Promise<void> {
    await this.authService.getCurrentUser().then( (user: User) => {
      user.tier = 0;
      this.ufb.saveUser(user).then( () => {
        this.router.navigate(['subscription-update/cancel']);
      });
    }).catch( () => {
      this.router.navigate(['/auth/login']);
    });

    console.log('Se cancela la subscripción');
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

  showToast(msg: string, colorCode: string, durationMsg: number = 2000) {
    this.toastController.create({
      message: msg,
      duration: durationMsg,
      color: colorCode
    }).then(toast => toast.present());
  }

  onRouterHome(): void {
    this.router.navigate(['/home']);
  }

}
