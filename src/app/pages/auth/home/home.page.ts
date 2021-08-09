import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { UserFirebaseService } from '@social/services/user-firebase.service';
import { TierManageService } from '@subscription/services/tier-manage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isUser: boolean;
  isCoach: boolean;
  isAdmin: boolean;
  isCoachTmp: boolean;

  loaded: boolean;

  constructor(private authService: AuthenticationService,
    private router: Router, private ufb: UserFirebaseService,
    private tierManageService: TierManageService,
    public loadingController: LoadingController) {
    
    this.loaded = false;
    this.authService.getCurrentUser().then( (user: any) => {
      if (user) {
        switch (user.userType) {
          case 'admin':
            this.isAdmin = true;
            this.isUser = false;
            this.isCoach = false;
            this.isCoachTmp = false;
            break;
          case 'user':
            this.isAdmin = false;
            this.isUser = true;
            this.isCoach = false;
            this.isCoachTmp = false;
            break;
          case 'coach':
            this.isAdmin = false;
            this.isUser = false;
            this.isCoach = true;
            this.isCoachTmp = false;
            break;
          case 'coach-tmp':
            this.isAdmin = false;
            this.isUser = false;
            this.isCoach = false;
            this.isCoachTmp = true;
            break;
          default:
            this.logout();
        }
      } else {
        this.logout();
      }
      this.loaded = true;
    }); 
  }

  ngOnInit() {
  }

  logout(): void{
    this.authService.logout().then( () => {
      this.router.navigate(['/auth/login']);
    });
  }

  validUserTier(user: any): void {
    if (this.tierManageService.validBill(user.nextBill.toDate())) {
      this.isAdmin = false;
      this.isUser = true;
    } else if (user.tier > 0) {
      this.isUser = true;
      user.nextBill = this.tierManageService.getNextBill(new Date(), user.tier);
      this.ufb.saveUser(user);
    } else {
      this.authService.logout().then( () => {
        this.router.navigate(['/auth/login']);
      })
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  onCoachTrainSession() {
    console.log('Coach Train Session');
  }

  onUserTrainSession() {
    console.log('User Train Session');
  }

  onPublicStatus() {
    console.log('Public Status');
  }

  onMyProfile() {
    console.log('My Profile');
  }

}
