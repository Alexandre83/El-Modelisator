import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { MaterialModule } from './material.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [ProjectFormComponent, UpdateComponent],
  imports: [CommonModule, MaterialModule, MDBBootstrapModulesPro, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialModule, MDBBootstrapModulesPro, FormsModule, ReactiveFormsModule, ProjectFormComponent, UpdateComponent],
  entryComponents: [ProjectFormComponent, UpdateComponent]
})
export class SharedModule { }
