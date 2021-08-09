import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsCoachPageRoutingModule } from './sessions-coach-routing.module';

import { SessionsCoachPage } from './sessions-coach.page';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsCoachPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [SessionsCoachPage]
})
export class SessionsCoachPageModule {}
