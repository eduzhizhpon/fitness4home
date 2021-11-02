import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionPageRoutingModule } from './subscription-routing.module';

import { SubscriptionPage } from './subscription.page';
import { SharedModule } from '../shared/shared.module';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CoreSharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionPage]
})
export class SubscriptionPageModule {}
