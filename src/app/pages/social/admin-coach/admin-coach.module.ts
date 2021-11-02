import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCoachPageRoutingModule } from './admin-coach-routing.module';

import { AdminCoachPage } from './admin-coach.page';
import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCoachPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [AdminCoachPage]
})
export class AdminCoachPageModule {}
