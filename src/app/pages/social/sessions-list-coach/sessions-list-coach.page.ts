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

  sessions: any;
  schedules: Schedule[];
  coach = new User();
  users: any;

  constructor(private router: Router,
    private conectionServices: ConectionService,
    private authService: AuthenticationService,
    private userService: UserFirebaseService) { }

  ngOnInit() {
    this.authService.getCurrentUser().then( (user: User) => {
      this.coach = user;
    });   
    this.users = this.userService.getUsers();
    this.sessions = this.conectionServices.getSessions();
    this.loadSchedules(); 
  }

  loadSchedules(){
    this.schedules = [];
    if(this.sessions != null){
      this.sessions.forEach((element: any) => {
        element.forEach((session: any) => {
          if(session.schedule != null){
            session.schedule.forEach((e: any) => {
              let schedule: Schedule = JSON.parse(e);
              this.schedules.push(schedule);
            });
          }
        });
      });
    }
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
