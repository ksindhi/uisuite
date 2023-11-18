import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { UiAvatarComponent } from 'projects/uisuite/src/lib/ui-avatar/ui-avatar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiAvatarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
