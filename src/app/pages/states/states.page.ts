import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.page.html',
  styleUrls: ['./states.page.scss'],
})
export class StatesPage implements OnInit {

  states: any;

  constructor(private router: Router,
    private conectionServices: ConectionService) { }

  ngOnInit() {
    this.states = this.conectionServices.getStates();
  }

  newState(){
    this.router.navigate(['/new-state'])
  }

}
