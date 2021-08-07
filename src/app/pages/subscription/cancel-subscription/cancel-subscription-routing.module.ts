import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelSubscriptionPage } from './cancel-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: CancelSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelSubscriptionPageRoutingModule {}
