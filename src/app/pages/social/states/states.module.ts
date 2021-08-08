import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatesPageRoutingModule } from './states-routing.module';

import { StatesPage } from './states.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatesPageRoutingModule
  ],
  declarations: [StatesPage]
})
export class StatesPageModule {}
