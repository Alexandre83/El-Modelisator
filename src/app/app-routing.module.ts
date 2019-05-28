import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/editor',
    pathMatch: 'full'
  },
  {
    path: 'editor',
    loadChildren: './modules/editor/editor.module#EditorModule'
  },
  {
    path: '**',
    redirectTo: '/editor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
