import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStatePageRoutingModule } from './new-state-routing.module';

import { NewStatePage } from './new-state.page';
import { TakePhotoComponent } from '@social/components/take-photo/take-photo.component';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStatePageRoutingModule,
    CoreSharedModule
  ],
  declarations: [NewStatePage, TakePhotoComponent]
})
export class NewStatePageModule {}
