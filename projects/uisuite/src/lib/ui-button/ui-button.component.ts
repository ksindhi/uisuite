import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'uis-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  standalone: true
})
export class UiButtonComponent {
@Input() text: 'Click Me';
@Input() type: 'solid' | 'outline' = 'solid';
@Input() color: 'primary' | 'success' | 'danger' | 'info' = 'primary';
@Input() bgColor:string;
textColor: string;
hoverColor: string;
ngOnChanges(changes: SimpleChanges): void {
  if (changes['bgColor']) {
    this.calculateTextColor();
    this.calculateHoverColor();
  }
}
private calculateTextColor(): void { 
  this.textColor = this.getTextColorBasedOnBackground(this.bgColor);
}

private calculateHoverColor(): void { 
  this.hoverColor = this.adjustColorBrightness(this.bgColor, 20);
}

private adjustColorBrightness(color: string, percent: number): string { 
  const rgb = this.hexToRgb(color);
  const adjustedLightness = Math.max(0, Math.min(100, rgb[2] - percent));
  return this.rgbToHex(rgb[0], rgb[1], adjustedLightness);
}

private hexToRgb(hex: string): number[] {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

private rgbToHex(r: number, g: number, b: number): string {
  return `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
getTextColorBasedOnBackground(backgroundColor: string): string { 
  const hex = backgroundColor.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255; 
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}
}
