import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UiDynamicFormComponent } from 'projects/uisuite/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'Atul Chauhan';
  radius = '20px';
  border = 'red';
  background = 'yellow';
  color = '#000';
  Text = 'bold';
  Style = 'circle';
  Size = '60px';
  fSize = '60px';

  public dynamicFormGroup: FormGroup;
  model = {
    documentname: {
      type: "text",
      value: "",
      label: "DocumentName",
      rules: {
        required: true,
      }
    },
    documentpath: {
      type: "text",
      value: "",
      label: "DocumentPath"
    },
    templatename: {
      type: "text",
      value: "",
      label: "TemplateName",
    },
    templatetype: {
      type: "number",
      value: "",
      label: "templatetype"
    },
    entrydate: {
      type: "date",
      value: "",
      label: "EntryDate",
    },
    documenttype: {
      label: "Document Type",
      value: "1500",
      type: "radio",
      options: [
        {
          label: "Type1",
          value: "1500",
        },
        {
          label: "Type2",
          value: "6",
        },
        {
          label: "Type3",
          value: "1",
        },
      ],

    },
    templatedisable: {
      label: "wanna disable to Template",
      value: "NO",
      type: "checkbox",
    },
    documenttypes: {
      label: "Document Type",
      value: "Na",
      type: "select",
      options: [
        {
          label: "select",
          value: "",
        },
        {
          label: "type1",
          value: "type1",
        },
        {
          label: "type2",
          value: "type2",
        },
      ],
    },
  };
event: any;
  onSubmit(event) { 
    console.log(event);
  }
}
