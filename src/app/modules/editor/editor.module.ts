import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { EditorRoutingModule } from './editor-routing.module';
import { GridComponent } from './_containers/pages/grid/grid.component';
import { EntityComponent } from './_containers/components/entity/entity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectionComponent } from './_containers/pages/connection/connection.component';

@NgModule({
  declarations: [GridComponent, EntityComponent, ConnectionComponent],
  imports: [SharedModule, EditorRoutingModule, GridsterModule]
})
export class EditorModule {}
