import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { UiDynamicCheckboxsComponent } from "./dynamic-checkboxs/dynamic-checkboxs.component";
import { UiDynamicInputComponent } from "./dynamic-input/dynamic-input.component";
import { UiDynamicRadioComponent } from "./dynamic-radio/dynamic-radio.component";
import { UiDynamicSelectComponent } from "./dynamic-select/dynamic-select.component";
import { CommonModule } from "@angular/common";


@Component({
  selector: "uis-app-field-input",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.css"] ,
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule], 
})
export class UiDynamicFieldComponent implements AfterViewInit{

  supportedDynamicComponents = [
    {
      name: 'text',
      component: UiDynamicInputComponent
    },
    {
      name: 'number',
      component: UiDynamicInputComponent
    },
    {
      name: 'select',
      component: UiDynamicSelectComponent
    },
    {
      name: 'radio',
      component: UiDynamicRadioComponent
    },
    {
      name: 'date',
      component: UiDynamicInputComponent
    },
    {
      name: 'checkbox',
      component: UiDynamicCheckboxsComponent
    }
  ]
  @ViewChild('dynamicInputContainer', { read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName: FormGroup;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic.component || UiDynamicInputComponent;
  }

}
