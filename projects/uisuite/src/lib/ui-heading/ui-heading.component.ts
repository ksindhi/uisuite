import { Component, Input } from "@angular/core"; 
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common"; 
@Component({
  selector: "uis-heading",
  templateUrl: "./ui-heading.component.html",
  styleUrls: ["./ui-heading.component.scss"],
  imports: [NgSwitch, NgSwitchCase,NgSwitchDefault],
  standalone: true
})
export class UiHeadingComponent {
  @Input() title: any = "Heading Title";
  @Input() tag: string = 'strong';
  @Input() size?: string = '1rem';
  @Input() truncate?: boolean = false;
  @Input() align?: string = 'left';
  @Input() spaceTop?: string = '0';
  @Input() spaceBottom?: string = '0';
  @Input() spaceRight?: string = '0';
  @Input() spaceLeft?: string = '0';
}
