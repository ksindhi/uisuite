import { Component, Input } from '@angular/core';

@Component({
  selector: 'uisuite-avatar',
  templateUrl: './ui-avatar.component.html',
  styleUrls: ['./ui-avatar.component.scss']
})
export class UiAvatarComponent {
  @Input() name: string = '';
  
  getInitials(): string {
    const words = this.name.split(' ');
    return words
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join('');
  }
}
