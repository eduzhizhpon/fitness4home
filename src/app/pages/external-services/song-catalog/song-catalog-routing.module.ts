import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongCatalogPage } from './song-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: SongCatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongCatalogPageRoutingModule {}
