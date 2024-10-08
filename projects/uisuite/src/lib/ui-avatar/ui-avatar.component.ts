import { Component, Input } from '@angular/core';

@Component({
  selector: 'uAvatar',
  templateUrl: './ui-avatar.component.html',
  styleUrls: ['./ui-avatar.component.scss'],
  standalone: true
})
export class UiAvatarComponent {
  @Input() name: string = '';
  @Input() size?: any = '';
  @Input() radius?: any = '';
  @Input() border?: any = '';
  @Input() background?: any = '';
  @Input() color?: any = '';
  @Input() text?: any = '';
  @Input() fontSize?: any = '';
  @Input() variant?: 'default' | 'circle'  = 'default';
  
  getInitials(): string {
    const words = this.name.split(' ');
    return words
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join('');
  }
}
