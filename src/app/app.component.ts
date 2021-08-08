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
    this.zoomService.initialize(environment.ZOOM_SDK_KEY, environment.ZOOM_SDK_SECRET)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }
}
