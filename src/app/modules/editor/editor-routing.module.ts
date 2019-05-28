import { ConnectionComponent } from './_containers/pages/connection/connection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './_containers/pages/grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: GridComponent
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
