import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { TierManageService } from '@subscription/services/tier-manage.service';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.page.html',
  styleUrls: ['./cancel-subscription.page.scss'],
})
export class CancelSubscriptionPage implements OnInit {

  nextBill: Date;

  constructor(private router: Router, private authService: AuthenticationService,
    private tierService: TierManageService) {
    this.authService.getCurrentUser().then( (user: any) => {
      if (user) {
        this.nextBill = user.nextBill.toDate();
      } else {
        router.navigate(['/auth/login']);
      }
    });
  }

  ngOnInit() {
  }

  onRouterHome() {
    if (this.tierService.validBill(this.nextBill)) {
      this.router.navigate(['/home']);
    } else {
      this.authService.logout().then( () =>
        this.router.navigate(['/auth/login'])
      );
    }
  }

}
