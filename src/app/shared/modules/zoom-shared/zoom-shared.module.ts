import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ZoomMeetingComponent } from '@external-services/components/zoom-meeting/zoom-meeting.component';

@NgModule({
  declarations: [ZoomMeetingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ZoomMeetingComponent]
})
export class ZoomSharedModule { }
