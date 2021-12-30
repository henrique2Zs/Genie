import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPerfilPage } from './tab-perfil.page';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: TabPerfilPage,
    children: [
      {
      path: 'InfoPerfilComponent',
      component: InfoPerfilComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPerfilPageRoutingModule {}
