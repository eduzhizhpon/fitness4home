import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { UserFirebaseService } from '@social/services/user-firebase.service';
import { TierManageService } from '@subscription/services/tier-manage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isUser: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthenticationService,
    private router: Router, private ufb: UserFirebaseService,
    private tierManageService: TierManageService) {
    this.authService.getCurrentUser().then( (user: User) => {
      if (user) {
        if (user.userType === 'admin') {
          this.isAdmin = true;
        } else if (user.userType === 'user') {
          if (tierManageService.validBill(user.nextBill)) {
            this.isAdmin = false;
            this.isUser = true;
          } else if (user.tier > 0) {
            user.nextBill = this.tierManageService.getNextBill(new Date(), user.tier);
            this.ufb.saveUser(user);
          } else {
            this.authService.logout().then( () => {
              this.router.navigate(['/auth/login']);
            })
          }
          
        } else if (user.userType === 'coach') {
          this.isAdmin = false;
          this.isUser = false;
        }
      } else {
        this.router.navigate(['/auth/login']);
      }
    }); 
  }

  ngOnInit() {
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
