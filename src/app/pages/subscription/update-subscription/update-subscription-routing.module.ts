import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSubscriptionPage } from './update-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSubscriptionPageRoutingModule {}
