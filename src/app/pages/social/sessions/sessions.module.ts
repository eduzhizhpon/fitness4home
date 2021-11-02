import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsPageRoutingModule } from './sessions-routing.module';

import { SessionsPage } from './sessions.page';

import { CoreSharedModule } from '@shared/core-shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [SessionsPage]
})
export class SessionsPageModule {}
