import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatesPage } from './states.page';

const routes: Routes = [
  {
    path: '',
    component: StatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatesPageRoutingModule {}
