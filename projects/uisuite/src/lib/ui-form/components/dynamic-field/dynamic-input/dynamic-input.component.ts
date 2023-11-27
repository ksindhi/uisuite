import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "uis-app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.css"],  
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule], 
})
export class UiDynamicInputComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
