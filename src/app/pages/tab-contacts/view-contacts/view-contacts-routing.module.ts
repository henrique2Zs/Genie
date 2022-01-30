import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewContactsPage } from './view-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ViewContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewContactsPageRoutingModule {}
