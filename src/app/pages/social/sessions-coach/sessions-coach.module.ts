import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsCoachPageRoutingModule } from './sessions-coach-routing.module';

import { SessionsCoachPage } from './sessions-coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsCoachPageRoutingModule
  ],
  declarations: [SessionsCoachPage]
})
export class SessionsCoachPageModule {}
