import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartSessionCoachPageRoutingModule } from './start-session-coach-routing.module';

import { StartSessionCoachPage } from './start-session-coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartSessionCoachPageRoutingModule
  ],
  declarations: [StartSessionCoachPage]
})
export class StartSessionCoachPageModule {}
