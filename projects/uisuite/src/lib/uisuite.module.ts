import { NgModule } from '@angular/core';
import { UisuiteComponent } from './uisuite.component'; 



@NgModule({
  declarations: [
    UisuiteComponent
  ],
  imports: [
    UiAvatarComponent
  ],
  exports: [
    UisuiteComponent
  ]
})
export class UisuiteModule { }
