import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Output } from "@angular/core";
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { FileModel, MessageService } from "../../../services/message.service";

@Component({
  selector: "uis-app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["./dynamic-input.component.scss"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }]
})
export class UiDynamicInputComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(   private messageService: MessageService,private formgroupDirective: FormGroupDirective) {
    debugger;
    this.formName = formgroupDirective.control;
  }
  currentFiles:any
  selectedFile: File;
  onFileChange(event: any) {
    if (this.field.type == 'file') {
      debugger;
      this.selectedFile = event.target.files[0]; 
      const fileModel: FileModel = {
        File: event.target.files[0],
        name: this.field.fieldName
        // Add other properties as needed
      };
      
      this.messageService.getSelectedFile().subscribe((v) => {
        debugger;
        this.currentFiles = v;
        console.log(v);
      });
  ;
      const updatedFiles = [...this.currentFiles, fileModel];
    this.messageService.setSelectedFile(updatedFiles);
    }
  }
}
