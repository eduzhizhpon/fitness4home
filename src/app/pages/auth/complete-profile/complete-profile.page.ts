import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../domain/user';

import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit {

  zoom = 15;
  lat = -2.902084;
  lng = -79.024752;
  currentLocation: any;
  centerLocation: any = {
    latitude: -2.902084,
    longitude: -79.024752
  };

  icons = {
    pointer: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png'
  };

  flag: boolean;
  user: User;
  imgData: any;

  constructor(private locationService: LocationService,
    private router: Router, private route: ActivatedRoute) {

      route.queryParams.subscribe( (params) => {
        console.log(params);
        this.user = new User();
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.user = this.router.getCurrentNavigation().extras.queryParams.user;
        }
        this.flag = this.user.userType === 'coach' ? true : false;
        this.user.profilePhoto = './assets/icon/';
      });
  }

  async ngOnInit() { }

  newAddress(event: any) {
    if (event) {
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      this.locationService.getAddressOfLocation(this.centerLocation);
      // console.log(this.centerLocation);
    }
  }

  imageSelectedEvt(data: any) {
    this.imgData = data;
  }

  uploadFinishedEvt(data: any) {
    this.user.profilePhoto = data;
  }

  updateUser() {
    console.log('entra');
  }

}
