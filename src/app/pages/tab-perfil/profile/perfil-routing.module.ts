import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
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
