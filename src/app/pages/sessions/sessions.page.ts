import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  sessions: any;

  constructor(private router: Router,
    private conectionServices: ConectionService) { }

  ngOnInit() {
    this.sessions = this.conectionServices.getSessions();
  }

  newSession(){
    this.router.navigate(['/new-session'])
  }

  editSession(session: any){
    let params: NavigationExtras = {
      queryParams: {
        session: session
      }
    }
    this.router.navigate(['/new-session'], params)
  }

}
