import { CoreSharedModule } from '@shared/core-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSubscriptionPageRoutingModule } from './update-subscription-routing.module';

import { UpdateSubscriptionPage } from './update-subscription.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSubscriptionPageRoutingModule,
    SharedModule,
    CoreSharedModule
  ],
  declarations: [UpdateSubscriptionPage]
})
export class UpdateSubscriptionPageModule {}
