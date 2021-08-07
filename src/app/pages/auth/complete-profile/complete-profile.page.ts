import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit {

  zoom = 15;
  currentLocation: any;
  centerLocation: any = {
    latitude: -2.902084,
    longitude: -79.024752
  };

  icons = {
    client: 'https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-48.png',
    shop: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Outside-Chartreuse.png',
    center: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Inside-Chartreuse.png',
    pointer: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png'
  };

  flag = true;

  constructor(private locationService: LocationService) { }

  async ngOnInit() {
    // this.currentLocation = await this.locationService.getCurrentLocation();
    // console.log(this.currentLocation);
  }

  newAddress(event: any) {
    if (event) {
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      this.locationService.getAddressOfLocation(this.centerLocation);
      // console.log(this.centerLocation);
    }
  }

}
