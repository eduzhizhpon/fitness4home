/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zoom-meeting',
  templateUrl: './zoom-meeting.component.html',
  styleUrls: ['./zoom-meeting.component.scss'],
})
export class ZoomMeetingComponent implements OnInit {

  @Input() meetingType: string;
  @Input() displayName: string;

  @Input() meetingNumber: string;
  @Input() meetingPassword: string;

  userName: string;
  password: string;

  isLogged: boolean;

  options: any = {
    'no_driving_mode':true,
    'no_invite':true,
    'no_meeting_end_message':true,
    'no_titlebar':false,
    'no_bottom_toolbar':false,
    'no_dial_in_via_phone':true,
    'no_dial_out_to_phone':true,
    'no_disconnect_audio':true,
    'no_share':true,
    'no_audio':true,
    'no_video':true,
    'no_meeting_error_message':true
  };

  constructor(private zoomService: Zoom,
      private toastController: ToastController) {
    // this.zoomService.initialize(environment.ZOOM_SDK_KEY, environment.ZOOM_SDK_SECRET)
    //   .then((success: any) => console.log(success))
    //   .catch((error: any) => console.log(error));

      this.isLogged = false;
  }

  ngOnInit() {
    this.isLoggedIn();
  }

  login() {
    this.zoomService.login(this.userName, this.password)
      .then((success: any) => {
        this.isLogged = true;
        this.showToast('Inicio de sesión en Zoom correcto');
        console.log(success);
      })
      .catch((error: any) => {
        this.isLogged = false;
        this.showToast('No se pudo iniciar sesión. Verifique que sus datos sean correctos');
        console.log(error);
      });
  }

  logout(){
    this.zoomService.logout()
      .then((success: boolean) => this.isLogged = false)
      .catch((error: any) => console.log(error));
  }

  startMeeting() {
    this.zoomService.startInstantMeeting(this.options)
      .then((success: any) => console.log('Start Zoom meeting', success))
      .catch((error: any) => this.showToast('No se pudo iniciar la reunión. Verifique que sus datos sean correctos'))
  }

  joinMeeting() {
    this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, this.options)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }

  isLoggedIn() {
    this.zoomService.isLoggedIn()
    .then((success: boolean) => this.isLogged = success)
    .catch((error: any) => this.isLogged = false);
  }

  showToast(msg: string) {
    this.toastController.create({
      message: msg,
      duration: 4000
    }).then(toast => toast.present());
  }

}
