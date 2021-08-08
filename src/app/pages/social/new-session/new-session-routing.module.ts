import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSessionPage } from './new-session.page';

const routes: Routes = [
  {
    path: '',
    component: NewSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSessionPageRoutingModule {}
