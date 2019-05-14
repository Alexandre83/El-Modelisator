import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { EditorRoutingModule } from './editor-routing.module';
import { GridComponent } from './_containers/pages/grid/grid.component';
import { EntityComponent } from './_containers/components/entity/entity.component';

@NgModule({
  declarations: [GridComponent, EntityComponent],
  imports: [CommonModule, EditorRoutingModule, GridsterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorModule {}
