import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConectionService } from '@social/services/conection.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.page.html',
  styleUrls: ['./states.page.scss'],
})
export class StatesPage implements OnInit {

  states: any;
  users: any;

  constructor(private router: Router,
    private conectionServices: ConectionService) { }

  ngOnInit() {
    this.users = this.conectionServices.getUsers();
    this.states = this.conectionServices.getStates();
  }

  newState(){
    this.router.navigate(['/home/states/new-state'])
  }

}
