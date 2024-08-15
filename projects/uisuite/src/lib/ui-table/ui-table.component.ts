import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uTable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-table.component.html',
  styleUrl: './ui-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UiTableComponent {
@Input() theme?: 'dark' | 'light' = 'light';
@Input() striped?: true | false = false;
@Input() borderless?: true | false = false;
@Input() responsive?: true | false = false;
@Input() hoverable?: true | false = false;
}
