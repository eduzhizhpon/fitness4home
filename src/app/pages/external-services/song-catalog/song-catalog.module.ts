import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongCatalogPageRoutingModule } from './song-catalog-routing.module';

import { SongCatalogPage } from './song-catalog.page';

import { CoreSharedModule } from '@shared/core-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongCatalogPageRoutingModule,
    CoreSharedModule
  ],
  declarations: [SongCatalogPage]
})
export class SongCatalogPageModule {}
