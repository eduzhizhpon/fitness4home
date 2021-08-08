import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '@social/domain/schedule';
import { Session } from '@social/domain/session';

@Component({
  selector: 'app-start-session-coach',
  templateUrl: './start-session-coach.page.html',
  styleUrls: ['./start-session-coach.page.scss'],
})
export class StartSessionCoachPage implements OnInit {

  session = new Session();
  schedules: Schedule[];

  constructor(private route: ActivatedRoute,
    private router: Router) {
      route.queryParams.subscribe(params =>{
        this.session = this.router.getCurrentNavigation().extras.queryParams.session;
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
  }

}
