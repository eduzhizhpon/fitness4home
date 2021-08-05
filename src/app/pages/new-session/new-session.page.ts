import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/domain/session';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.page.html',
  styleUrls: ['./new-session.page.scss'],
})
export class NewSessionPage implements OnInit {

  session = new Session();
  timeStart = new Date();
  timeEnd = new Date();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private conectionService: ConectionService) { 
      route.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.session = this.router.getCurrentNavigation().extras.queryParams.session;
          this.timeStart = this.session.hour_start;
          this.timeEnd = this.session.hour_end;
        }
      })
    }

  ngOnInit() {
  }

  saveSession(){
    this.session.hour_start = this.timeStart
    this.session.hour_end = this.timeEnd
    
    if(this.session.day != null && 
      this.session.hour_start != null && 
      this.session.hour_end != null && 
      this.session.hour_end > this.session.hour_start &&
      this.session.type != null){
        console.log(this.session);
      // this.conectionService.saveSession(this.session);
      // this.router.navigate(['/sessions']);
    }
  }

}
