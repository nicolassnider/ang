import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormTemplateComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[FormTemplateComponent]
})
export class FormTemplateModule { }
