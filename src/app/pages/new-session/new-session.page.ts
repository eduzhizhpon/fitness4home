import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Schedule } from 'src/app/domain/schedule';
import { Session } from 'src/app/domain/session';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.page.html',
  styleUrls: ['./new-session.page.scss'],
})
export class NewSessionPage implements OnInit {
  session = new Session();
  schedule = new Schedule();

  timeStart = new Date();
  timeEnd = new Date();

  number: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private conectionService: ConectionService) { 
      route.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.session = this.router.getCurrentNavigation().extras.queryParams.session;
          this.number = this.router.getCurrentNavigation().extras.queryParams.number;
          if(this.session.schedule != null){
            this.session.schedule.forEach(e => {
              let schedule: Schedule = JSON.parse(e);
              if(schedule.id == this.number.toString()){
                this.schedule = schedule;
              }
            });
          }
        }
      })
    }

  ngOnInit() {
  }

  saveSession(){
    this.schedule.id = this.number.toString();
    this.schedule.sid = this.session.id;
    this.schedule.hour_start = this.timeStart;
    this.schedule.hour_end = this.timeEnd;
    if(this.schedule.day != null && 
        this.schedule.hour_start != null && 
        this.schedule.hour_end != null && 
        this.schedule.hour_end > this.schedule.hour_start &&
        this.schedule.type != null
        ){
      if(this.session.schedule == null){
        this.session.schedule = [];
      }
      this.session.schedule.push(JSON.stringify(this.schedule));
      this.conectionService.saveSession(this.session);
      this.router.navigate(['/tabs/tab2']);
    }
  }

}
