import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from 'src/app/domain/schedule';
import { Session } from 'src/app/domain/session';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-start-session-coach',
  templateUrl: './start-session-coach.page.html',
  styleUrls: ['./start-session-coach.page.scss'],
})
export class StartSessionCoachPage implements OnInit {

  session = new Session();
  schedules: Schedule[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private conectionService: ConectionService) {
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
