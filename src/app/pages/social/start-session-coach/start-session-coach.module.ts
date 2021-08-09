import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartSessionCoachPageRoutingModule } from './start-session-coach-routing.module';

import { StartSessionCoachPage } from './start-session-coach.page';

import { CoreSharedModule } from '@shared/core-shared.module';
import { ZoomSharedModule } from '@shared/modules/zoom-shared/zoom-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartSessionCoachPageRoutingModule,
    CoreSharedModule,
    ZoomSharedModule
  ],
  declarations: [StartSessionCoachPage]
})
export class StartSessionCoachPageModule {}
