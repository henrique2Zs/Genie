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
        path: 'subtab-profile',        
        loadChildren: () => import('./subtab-profile/subtab-profile.module').then( m => m.SubtabProfilePageModule)        
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
  },
/*  {
    path: 'subtab-profile',
    loadChildren: () => import('./subtab-profile/subtab-profile.module').then( m => m.SubtabProfilePageModule)
  },
  {
    path: 'subtab-cards',
    loadChildren: () => import('./subtab-cards/subtab-cards.module').then( m => m.SubtabCardsPageModule)
  },
  {
    path: 'subtab-contacts',
    loadChildren: () => import('./subtab-contacts/subtab-contacts.module').then( m => m.SubtabContactsPageModule)
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
