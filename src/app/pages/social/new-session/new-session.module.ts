import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSessionPageRoutingModule } from './new-session-routing.module';

import { NewSessionPage } from './new-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSessionPageRoutingModule
  ],
  declarations: [NewSessionPage]
})
export class NewSessionPageModule {}
