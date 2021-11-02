import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsCoachPage } from './sessions-coach.page';

const routes: Routes = [
  {
    path: '',
    component: SessionsCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsCoachPageRoutingModule {}
