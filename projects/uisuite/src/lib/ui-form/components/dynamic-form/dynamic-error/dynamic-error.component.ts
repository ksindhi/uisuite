import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "uis-app-dynamic-error",
  templateUrl: "./dynamic-error.component.html",
  styleUrls: ["./dynamic-error.component.scss"],
  imports:[NgIf,NgFor,CommonModule, ReactiveFormsModule],
  standalone:true
})
export class UiDynamicErrorComponent implements OnInit {
  formName: FormGroup;
  @Input() fieldName: string;

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
