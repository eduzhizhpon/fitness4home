import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteProfilePageRoutingModule } from './complete-profile-routing.module';

import { CompleteProfilePage } from './complete-profile.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteProfilePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow'
    })

  ],
  declarations: [CompleteProfilePage]
})
export class CompleteProfilePageModule {}
