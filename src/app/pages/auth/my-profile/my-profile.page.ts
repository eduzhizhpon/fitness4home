import { Component, OnInit } from '@angular/core';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  currentUser: User = new User();

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getCurrentUser().then( (user) => {
      this.currentUser = user;
    }).catch( (reason) => {
      console.log(reason);
    });
  }

}
