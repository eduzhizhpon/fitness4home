import { SubscriptionOptionsComponent } from '../shared/components/subscription-options/subscription-options.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SubscriptionOptionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [SubscriptionOptionsComponent]
})
export class SharedModule { }
