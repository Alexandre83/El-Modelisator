import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatIconModule, MatToolbarModule, MatCardModule],
  exports: [MatIconModule, MatToolbarModule, MatCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule {}
