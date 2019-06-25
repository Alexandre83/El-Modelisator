import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, MDBBootstrapModulesPro],
  exports: [CommonModule, MaterialModule, MDBBootstrapModulesPro]
})
export class SharedModule {}
