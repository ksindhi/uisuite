import { NgModule } from '@angular/core';
import { UisuiteComponent } from './uisuite.component';
import { UiAvatarComponent } from './ui-avatar/ui-avatar.component';



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
