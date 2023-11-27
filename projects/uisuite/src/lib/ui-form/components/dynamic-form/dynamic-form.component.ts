import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UiDynamicFieldComponent } from "../dynamic-field/dynamic-field.component";
import { UiDynamicErrorComponent } from "./dynamic-error/dynamic-error.component";

@Component({
  selector: "uis-app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
  standalone:true,  
  imports:[NgIf,NgFor,CommonModule, ReactiveFormsModule, UiDynamicFieldComponent,UiDynamicErrorComponent],
})
export class UiDynamicFormComponent implements OnInit {
  @Input() model: {};
  @Input() dynamicFormGroup: any;
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>()
  public fields = [];

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {

      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({ ...fieldProps, fieldName: field });
    }

    return formGroupFields;
  }

  private addValidator(rules) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required":
          return Validators.required;
        //add more case for future.
      }
    });
    return validators;
  }

  onSubmit(): void {
    if (this.dynamicFormGroup.invalid) {
      return
    }
    this.newItemEvent.emit(this.dynamicFormGroup.value)
   // console.log(JSON.stringify(this.dynamicFormGroup.value));

  }
}
