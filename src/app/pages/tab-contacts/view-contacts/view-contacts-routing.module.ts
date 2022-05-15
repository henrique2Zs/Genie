import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewContactsPage } from './view-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ViewContactsPage
  },
  {
    path: 'viewCard',
    loadChildren: () => import('../../../pages/view-card/view-card.module').then(m => m.ViewCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewContactsPageRoutingModule {}
