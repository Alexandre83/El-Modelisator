import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { GridsterModule } from 'angular-gridster2';
import { SharedModule } from 'src/app/shared/shared.module';

import { CollectionFormComponent } from './_containers/components/collection-form/collection-form.component';
import { ListComponent } from './_containers/components/list/list.component';
import { ConnectionComponent } from './_containers/pages/connection/connection.component';
import { EditorComponent } from './_containers/pages/editor/editor.component';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [ConnectionComponent, EditorComponent, ListComponent, CollectionFormComponent],
  imports: [
    SharedModule,
    EditorRoutingModule,
    GridsterModule,
    NgJsonEditorModule
  ],
})
export class EditorModule { }
