import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  flag: boolean;

  constructor() {

    this.flag = true; 
  }

  ngOnInit() {
  }

  onCoachTrainSession() {
    console.log('Coach Train Session');
  }

  onUserTrainSession() {
    console.log('User Train Session');
  }

  onPublicStatus() {
    console.log('Public Status');
  }

  onMyProfile() {
    console.log('My Profile');
  }

}
