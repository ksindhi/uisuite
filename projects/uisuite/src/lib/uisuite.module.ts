import { NgModule } from '@angular/core';
import { UisuiteComponent } from './uisuite.component';
import { UiAvatarComponent } from './ui-avatar/ui-avatar.component';



@NgModule({
  declarations: [
    UisuiteComponent
    
  ],
  imports: [
  ],
  exports: [
    UisuiteComponent,
    UiAvatarComponent
  ]
})
export class UisuiteModule { }
