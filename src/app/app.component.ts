import { Component } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private zoomService: Zoom) {
    this.zoomService.initialize(environment.zoomSDKKey, environment.zoomSDKSecret)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }
}
