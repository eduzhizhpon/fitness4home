import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartSessionCoachPageRoutingModule } from './start-session-coach-routing.module';

import { StartSessionCoachPage } from './start-session-coach.page';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartSessionCoachPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [StartSessionCoachPage]
})
export class StartSessionCoachPageModule {}
