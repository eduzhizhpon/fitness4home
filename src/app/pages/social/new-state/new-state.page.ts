import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@social/domain/state';
import { ConectionService } from '@social/services/conection.service';

@Component({
  selector: 'app-new-state',
  templateUrl: './new-state.page.html',
  styleUrls: ['./new-state.page.scss'],
})
export class NewStatePage implements OnInit {

  state = new State();
  imgData: string;

  constructor(private router: Router,
    private conectionService: ConectionService) { }

  ngOnInit() {
  }

  saveState(){
    if(this.state.title != null && 
      this.state.description != null && 
      this.state.image != null){

      this.conectionService.saveState(this.state);
      this.router.navigate(['/home/states']);
    }
  }

  imageSelectedEvt(data: any) {
    this.imgData = data;
  }

  uploadFinishedEvt(data: any) {
    this.state.image = data;
  }

}
