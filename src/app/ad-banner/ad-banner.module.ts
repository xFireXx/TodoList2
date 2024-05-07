import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  declarations: [
    AdBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdBannerComponent
  ]
})
export class AdBannerModule { }
