import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isUser: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthenticationService,
    private router: Router) {
    authService.getCurrentUser().then( (user: User) => {
      if (user) {
        if (user.userType === 'admin') {
          this.isAdmin = true;
        } else if (user.userType === 'user') {
          this.isAdmin = false;
          this.isUser = true;
        } else if (user.userType === 'coach') {
          this.isAdmin = false;
          this.isUser = false;
        }
      } else {
        // this.router.navigate(['/auth/login']);
        this.isAdmin = true;
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
