import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsListCoachPage } from './sessions-list-coach.page';

const routes: Routes = [
  {
    path: '',
    component: SessionsListCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsListCoachPageRoutingModule {}
