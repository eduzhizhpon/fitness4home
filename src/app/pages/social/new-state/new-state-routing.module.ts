import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStatePage } from './new-state.page';

const routes: Routes = [
  {
    path: '',
    component: NewStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStatePageRoutingModule {}
