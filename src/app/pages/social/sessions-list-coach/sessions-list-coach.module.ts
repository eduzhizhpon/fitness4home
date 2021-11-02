import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsListCoachPageRoutingModule } from './sessions-list-coach-routing.module';

import { SessionsListCoachPage } from './sessions-list-coach.page';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsListCoachPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [SessionsListCoachPage]
})
export class SessionsListCoachPageModule {}
