import { SubscriptionOptionsComponent } from './../components/subscription-options/subscription-options.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionPageRoutingModule } from './subscription-routing.module';

import { SubscriptionPage } from './subscription.page';
import { SubscriptionFeedbackComponent } from '../components/subscription-feedback/subscription-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPageRoutingModule
  ],
  declarations: [SubscriptionPage,
      SubscriptionOptionsComponent,
      SubscriptionFeedbackComponent]
})
export class SubscriptionPageModule {}
