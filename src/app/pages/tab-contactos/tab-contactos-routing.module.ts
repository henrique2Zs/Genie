import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabContactosPage } from './tab-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: TabContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabContactosPageRoutingModule {}
