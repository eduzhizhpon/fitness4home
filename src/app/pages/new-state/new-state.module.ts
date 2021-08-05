import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStatePageRoutingModule } from './new-state-routing.module';

import { NewStatePage } from './new-state.page';
import { TakePhotoComponent } from 'src/app/components/take-photo/take-photo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStatePageRoutingModule
  ],
  declarations: [NewStatePage, TakePhotoComponent]
})
export class NewStatePageModule {}
