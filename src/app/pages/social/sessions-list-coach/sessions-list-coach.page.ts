import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { Schedule } from '@social/domain/schedule';
import { Session } from '@social/domain/session';
import { ConectionService } from '@social/services/conection.service';
import { UserFirebaseService } from '@social/services/user-firebase.service';

@Component({
  selector: 'app-sessions-list-coach',
  templateUrl: './sessions-list-coach.page.html',
  styleUrls: ['./sessions-list-coach.page.scss'],
})
export class SessionsListCoachPage implements OnInit {

  sessions: Session[];
  schedules: Schedule[];
  users: User[];
  coach = new User();

  constructor(private router: Router,
    private conectionServices: ConectionService,
    private authService: AuthenticationService,
    private userService: UserFirebaseService) { }

  ngOnInit() {
    this.authService.getCurrentUser().then( (user: User) => {
      this.coach = user;
    });   
    this.conectionServices.getSessions().subscribe((s: Session[]) => {
      this.sessions = s;
      this.schedules = [];
      this.sessions.forEach((session: Session) => {
        this.userService.getUsers().subscribe((u: User[]) => {
          this.users = u;
        });
        session.schedule.forEach((schedule: any) => {
          let scdl: Schedule = JSON.parse(schedule);
          this.schedules.push(scdl);
        });
      });
    });
  }

  startSession(session: Session){
    let params: NavigationExtras = {
      queryParams: {
        session: session
      }
    }
    this.router.navigate(['/session-coach/start-session'], params);
  }

}
