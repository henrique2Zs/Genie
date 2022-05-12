import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtabContactsPage } from './subtab-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: SubtabContactsPage,
      children: [
        {
          path: 'list',
          loadChildren: () => import('../../tab-contacts/contacts-page/contacts-page.module')
          .then(m => m.ContactsPageModule)
        },
        {
          path: 'answers',
          loadChildren: () => import('../../tab-contacts/answers-page/answers-page.module')
          .then( m => m.AnswersPagePageModule)
        },
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtabContactsPageRoutingModule {}
