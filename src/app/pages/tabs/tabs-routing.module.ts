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
        loadChildren: () => import('../tab-contacts/contacts-page/contacts-page.module').then(m => m.ContactsPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../tab-perfil/profile/perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
