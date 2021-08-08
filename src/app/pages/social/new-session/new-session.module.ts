import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSessionPageRoutingModule } from './new-session-routing.module';

import { NewSessionPage } from './new-session.page';

import { CoreSharedModule } from '@shared/core-shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSessionPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [NewSessionPage]
})
export class NewSessionPageModule {}
