import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Output } from "@angular/core";
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "uis-app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.scss"],  
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule], 
  viewProviders: [
    { 
      provide: ControlContainer, 
      useExisting: FormGroupDirective 
    }]
})
export class UiDynamicInputComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    debugger;
    this.formName = formgroupDirective.control;
  }
}
