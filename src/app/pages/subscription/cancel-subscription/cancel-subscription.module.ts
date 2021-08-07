import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelSubscriptionPageRoutingModule } from './cancel-subscription-routing.module';

import { CancelSubscriptionPage } from './cancel-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelSubscriptionPageRoutingModule
  ],
  declarations: [CancelSubscriptionPage]
})
export class CancelSubscriptionPageModule {}
