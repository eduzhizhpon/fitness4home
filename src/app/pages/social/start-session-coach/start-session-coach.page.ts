import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { Schedule } from '@social/domain/schedule';
import { Session } from '@social/domain/session';
import { UserFirebaseService } from '@social/services/user-firebase.service';

@Component({
  selector: 'app-start-session-coach',
  templateUrl: './start-session-coach.page.html',
  styleUrls: ['./start-session-coach.page.scss'],
})
export class StartSessionCoachPage implements OnInit {

  login = new User();
  user = new User();
  session = new Session();
  schedules: Schedule[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserFirebaseService) {
      route.queryParams.subscribe(params =>{
        this.session = this.router.getCurrentNavigation().extras.queryParams.session;
        userService.readUser(this.session.uid).subscribe((user: User) => this.user = user);
        if(this.session.schedule != null){
          this.schedules = [];
          this.session.schedule.forEach(e => {
            let schedule: Schedule = JSON.parse(e);
            this.schedules.push(schedule);
          });
        }
      });
    }

  ngOnInit() {
    this.authService.getCurrentUser().then( (user: User) => {
      this.login = user;
    }); 
  }

}
