import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private platform: Platform) { }

  async getCurrentLocation(withAddress: boolean = true): Promise<any> {
    const location: any = {};

    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        const options = {
          frequency: 1000,
          timeout: 15000,
          enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(
          position => {
            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;
            if (withAddress) {
              const geocoder = new google.maps.Geocoder();
              const latlng = { lat: location.latitude, lng: location.longitude };
              geocoder.geocode({ location: latlng }, (results, status) => {
                if (results != null && results !== undefined) {
                  location.address = results[0].formatted_address;
                } //end if
                resolve(location);
              });
            } else {
              resolve(location);
            } //end if
          },
          error => {
            resolve(null);
          },
          options
        );
      } //end if
    });
  }

  async getAddressOfLocation(location: any) {
    const geocoder = new google.maps.Geocoder();
    const latlng = { lat: location.latitude, lng: location.longitude };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (results != null) {
        // console.log(results);
        location.address = results[0].formatted_address;
        return location.address;
      }
    });
  }

}
