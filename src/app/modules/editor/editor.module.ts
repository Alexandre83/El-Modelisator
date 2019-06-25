import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { NgJsonEditorModule } from 'ang-jsoneditor';

import { EditorRoutingModule } from './editor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectionComponent } from './_containers/pages/connection/connection.component';
import { EditorComponent } from './_containers/pages/editor/editor.component';
import { ListComponent } from './_containers/components/list/list.component';

@NgModule({
  declarations: [ConnectionComponent, EditorComponent, ListComponent],
  imports: [
    SharedModule,
    EditorRoutingModule,
    GridsterModule,
    NgJsonEditorModule
  ]
})
export class EditorModule {}
