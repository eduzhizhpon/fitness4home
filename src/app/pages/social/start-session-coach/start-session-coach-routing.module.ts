import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartSessionCoachPage } from './start-session-coach.page';

const routes: Routes = [
  {
    path: '',
    component: StartSessionCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartSessionCoachPageRoutingModule {}
