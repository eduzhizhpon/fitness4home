import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSessionPageRoutingModule } from './new-session-routing.module';

import { NewSessionPage } from './new-session.page';

import { CoreSharedModule } from '@shared/core-shared.module';
import { ZoomSharedModule } from '@shared/modules/zoom-shared/zoom-shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSessionPageRoutingModule,
    CoreSharedModule,
    ZoomSharedModule
  ],
  declarations: [NewSessionPage]
})
export class NewSessionPageModule {}
