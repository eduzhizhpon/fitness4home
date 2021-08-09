import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { Schedule } from '@social/domain/schedule';
import { Session } from '@social/domain/session';
import { ConectionService } from '@social/services/conection.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  user = new User();
  sessions: any;
  session = new Session();
  schedule1 = new Schedule();
  schedule2 = new Schedule();
  schedule3 = new Schedule();
  schedule4 = new Schedule();

  constructor(private router: Router,
    private conectionServices: ConectionService,
    private authService: AuthenticationService) { 
  }

  ngOnInit() {
    this.authService.getCurrentUser().then( (user: User) => {
      this.user = user;
    });
    
    this.addSessions();
  }

  addSessions(){
    this.sessions = this.conectionServices.getSessions();
    this.sessions.forEach((element: any[]) => {
      element.forEach(e => {
        // if(e.uid == this.user.uid){
        if(e.uid == "KV8Oo7PylzZkK3WeqZUE9I7CC3A2"){//get user id
          this.session = e;
          if(this.session.schedule != null){
            this.session.schedule.forEach(e => {
              let schedule: Schedule = JSON.parse(e);
              if(schedule.id == "1"){
                this.schedule1 = schedule;
              }else if(schedule.id == "2"){
                this.schedule2 = schedule;
              }else if(schedule.id == "3"){
                this.schedule3 = schedule;
              }else if(schedule.id == "4"){
                this.schedule4 = schedule;
              }
            });
          }
        }
      });
      if(this.session.id == null){
        this.conectionServices.saveSession(this.session);
      }
    });
  }

  newSession(number: any){
    let params: NavigationExtras = {
      queryParams: {
        number: number,
        session: this.session
      }
    }
    this.router.navigate(['/session-user/new-session'], params);
  }

  loadSession(number: any, session: any){
    let params: NavigationExtras = {
      queryParams: {
        number: number,
        session: session
      }
    }
    this.router.navigate(['/session-user/new-session'], params);
  }

  cancelSession(){
    this.conectionServices.deleteSession(this.session);
    this.schedule1 = new Schedule();
    this.schedule2 = new Schedule();
    this.schedule3 = new Schedule();
    this.schedule4 = new Schedule();
  }

  doRefresh(event: any) {
    this.addSessions();
    event.target.complete();
  }


}
