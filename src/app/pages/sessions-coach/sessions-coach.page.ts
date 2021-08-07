import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/domain/schedule';
import { Session } from 'src/app/domain/session';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-sessions-coach',
  templateUrl: './sessions-coach.page.html',
  styleUrls: ['./sessions-coach.page.scss'],
})
export class SessionsCoachPage implements OnInit {

  sessions: any;
  schedules: Schedule[];

  constructor(private router: Router,
    private conectionServices: ConectionService) { }

  ngOnInit() {
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

  aceptSession(session: Session){
    session.state = "Aceptado"
    console.log(session);
    this.conectionServices.saveSession(session);
  }

}
