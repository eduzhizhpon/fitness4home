import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { Schedule } from '@social/domain/schedule';
import { Session } from '@social/domain/session';
import { ConectionService } from '@social/services/conection.service';
import { UserFirebaseService } from '@social/services/user-firebase.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.page.html',
  styleUrls: ['./new-session.page.scss'],
})
export class NewSessionPage implements OnInit {

  coach = new User();
  login = new User();
  session = new Session();
  schedule = new Schedule();

  timeStart = new Date();
  timeEnd = new Date();

  number: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private conectionService: ConectionService,
              private userService: UserFirebaseService,
              private authService: AuthenticationService) { 
      route.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.session = this.router.getCurrentNavigation().extras.queryParams.session;
          this.number = this.router.getCurrentNavigation().extras.queryParams.number;
          if(this.session.schedule != null){
            userService.readUser(this.session.cid).subscribe((user: User) => this.coach = user);
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
    this.authService.getCurrentUser().then( (user: User) => {
      this.login = user;
    });  
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
      this.router.navigate(['session-user']);
    }
  }

}
