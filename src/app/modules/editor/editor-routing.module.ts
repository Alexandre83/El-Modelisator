import { ConnectionComponent } from './_containers/pages/connection/connection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './_containers/pages/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent
  },
  {
    path: 'config',
    component: ConnectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
