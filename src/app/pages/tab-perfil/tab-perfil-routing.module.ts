import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPerfilPage } from './tab-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: TabPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPerfilPageRoutingModule {}
