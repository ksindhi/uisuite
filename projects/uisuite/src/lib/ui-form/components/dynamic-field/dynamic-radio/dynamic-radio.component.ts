import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "uis-app-dynamic-radio",
  templateUrl: "./dynamic-radio.component.html",
  styleUrls: ["./dynamic-radio.component.scss"],  
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule],   
})
export class UiDynamicRadioComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
