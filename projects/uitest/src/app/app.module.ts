import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiAvatarComponent, UiHeadingComponent } from 'projects/uisuite/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiAvatarComponent,
    UiHeadingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
