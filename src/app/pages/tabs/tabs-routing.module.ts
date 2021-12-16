import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-cards',
        loadChildren: () => import('../tab-cards/tab.module').then(m => m.TabPageModule)
      },
      {
        path: 'tab-contactos',
        loadChildren: () => import('../tab-contactos/tab-contactos.module').then(m => m.TabContactosPageModule)
      },
      {
        path: 'tab-perfil',
        loadChildren: () => import('../tab-perfil/tab-perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'tab-cards',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../tab-cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
