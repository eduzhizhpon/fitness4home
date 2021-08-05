import { Component, Input, OnInit } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zoom-meeting',
  templateUrl: './zoom-meeting.component.html',
  styleUrls: ['./zoom-meeting.component.scss'],
})
export class ZoomMeetingComponent implements OnInit {

  // @Input() meetingNumber: string;
  // @Input() meetingPassword: string;
  // @Input() displayName: string;

  userName: string;
  password: string;
  meetingNumber: string;
  meetingPassword: string;
  displayName: string;

  options: any = {
    "no_driving_mode":true,
    "no_invite":true,
    "no_meeting_end_message":true,
    "no_titlebar":false,
    "no_bottom_toolbar":false,
    "no_dial_in_via_phone":true,
    "no_dial_out_to_phone":true,
    "no_disconnect_audio":true,
    "no_share":true,
    "no_audio":true,
    "no_video":true,
    "no_meeting_error_message":true
  };

  constructor(private zoomService: Zoom) {
    this.zoomService.initialize(environment.ZOOM_SDK_KEY, environment.ZOOM_SDK_SECRET)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }

  ngOnInit() {
  }

  login() {
    this.zoomService.login(this.userName, this.password)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }

  logout(){
    this.zoomService.logout()
      .then((success: boolean) => console.log(success))
      .catch((error: any) => console.log(error));
  }

  startMeeting() {
    this.zoomService.startInstantMeeting(this.options)
      .then((success: any) => console.log('Start Zoom meeting', success))
      .catch((error: any) => console.log(error));
  }

  joinMeeting() {
    this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, this.options)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }

}
