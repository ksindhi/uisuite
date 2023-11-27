import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "uis-app-dynamic-checkboxs",
  templateUrl: "./dynamic-checkboxs.component.html",
  styleUrls: ["./dynamic-checkboxs.component.css"], 
  imports:[CommonModule, ReactiveFormsModule],
  standalone:true  
})
export class UiDynamicCheckboxsComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
