import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { Schedule } from '@social/domain/schedule';
import { Session } from '@social/domain/session';
import { ConectionService } from '@social/services/conection.service';
import { UserFirebaseService } from '@social/services/user-firebase.service';

@Component({
  selector: 'app-sessions-coach',
  templateUrl: './sessions-coach.page.html',
  styleUrls: ['./sessions-coach.page.scss'],
})
export class SessionsCoachPage implements OnInit {
  
  sessions: Session[];
  schedules: Schedule[];
  users: User[];

  constructor(private router: Router,
    private conectionServices: ConectionService,
    private authService: AuthenticationService,
    private userService: UserFirebaseService) { }

  ngOnInit() {
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

  aceptSession(session: Session){
    this.authService.getCurrentUser().then( (user: User) => {
      session.cid = user.uid;
      session.state = "Aceptado";
      console.log(session);
      this.conectionServices.saveSession(session);
      this.sessions = [];
      this.users = [];
      this.schedules = [];
    });    
  }

}
