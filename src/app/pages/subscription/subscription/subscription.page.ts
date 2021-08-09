import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';

import { AuthenticationService } from '@auth-app/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { UserFirebaseService } from '@social/services/user-firebase.service';
import { TierManageService } from '@subscription/services/tier-manage.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  subscriptionTier: string;
  enableFeedback: boolean;

  constructor(private authService: AuthenticationService,
    private ufs: UserFirebaseService,
    private toastController: ToastController,
    private router: Router,
    private tierManageService: TierManageService) {
    this.enableFeedback = false;
  }

  ngOnInit() {
  }

  setSubscriptionTier(event: string): void {
    this.subscriptionTier = event;
  }

  onSubscribe(): void {
    this.authService.getCurrentUser().then( (user: User) => {
      user.tier =  +this.subscriptionTier;
      user.nextBill = this.tierManageService.getNextBill(new Date(), user.tier);
      this.ufs.saveUser(user).then( (data) => {
        this.enableFeedback = true;
      });
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un error al elegir un plan de subscripión';
      const colorCode = 'danger';
      this.showToast(msg, colorCode, 3500);
      this.authService.logout().then( (data) => {
        this.router.navigate(['/auth/login']);
      });
    });
    console.log(this.subscriptionTier);
  }

  onRouterHome(): void {
    console.log('Ir al Home');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
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
