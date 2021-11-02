import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom-meeting-page',
  templateUrl: './zoom-meeting.page.html',
  styleUrls: ['./zoom-meeting.page.scss'],
})
export class ZoomMeetingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startMeeting() {

  }

  joinMeeting() {
    // this.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
    //   .then((success: any) => console.log(success))
    //   .catch((error: any) => console.log(error));
  }
}
