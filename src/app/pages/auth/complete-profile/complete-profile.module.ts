import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteProfilePageRoutingModule } from './complete-profile-routing.module';

import { CompleteProfilePage } from './complete-profile.page';

import { AgmCoreModule } from '@agm/core';

import { UploadImageComponent } from '../components/upload-image/upload-image.component';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CoreSharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteProfilePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow'
    })

  ],
  declarations: [CompleteProfilePage, UploadImageComponent]
})
export class CompleteProfilePageModule {}
