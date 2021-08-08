import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoomMeetingPage } from './zoom-meeting.page';

const routes: Routes = [
  {
    path: '',
    component: ZoomMeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoomMeetingPageRoutingModule {}
