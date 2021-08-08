import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsListCoachPageRoutingModule } from './sessions-list-coach-routing.module';

import { SessionsListCoachPage } from './sessions-list-coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsListCoachPageRoutingModule
  ],
  declarations: [SessionsListCoachPage]
})
export class SessionsListCoachPageModule {}
