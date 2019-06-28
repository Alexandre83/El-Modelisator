import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule {}
