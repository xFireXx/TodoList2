import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskboxComponent } from './taskbox/taskbox.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './taskbox/tasks.service';
import { AdBannerModule } from './ad-banner/ad-banner.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdBannerModule 
  ],
  providers: [
    provideClientHydration(),
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
