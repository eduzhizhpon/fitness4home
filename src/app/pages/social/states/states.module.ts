import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatesPageRoutingModule } from './states-routing.module';

import { StatesPage } from './states.page';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatesPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [StatesPage]
})
export class StatesPageModule {}
