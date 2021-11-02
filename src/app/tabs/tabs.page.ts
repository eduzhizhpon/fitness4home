// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {


  isUser: boolean;
  isCoach: boolean;
  isAdmin: boolean;
  isCoachTmp: boolean;

  loading: boolean;

  constructor(private authService: AuthenticationService,
    public loadingController: LoadingController,
    private navCtrl: NavController) {
    
    this.loading = true;
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
        }
      } else {
      }
      this.loading = false;
    }); 
  }

  ngOnInit() {
  }

}
