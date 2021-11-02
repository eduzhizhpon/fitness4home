import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCoachPage } from './admin-coach.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCoachPageRoutingModule {}
