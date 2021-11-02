import { AppNameIconComponent } from './components/app-name-icon/app-name-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppNameIconComponent],
  imports: [
    CommonModule
  ],
  exports: [AppNameIconComponent]
})
export class CoreSharedModule { }
