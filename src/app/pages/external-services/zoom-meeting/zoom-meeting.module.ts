import { ZoomMeetingComponent } from './../components/zoom-meeting/zoom-meeting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoomMeetingPageRoutingModule } from './zoom-meeting-routing.module';

import { ZoomMeetingPage } from './zoom-meeting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoomMeetingPageRoutingModule
  ],
  declarations: [ZoomMeetingPage, ZoomMeetingComponent]
})
export class ZoomMeetingPageModule {}
