import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtabContactsPage } from './subtab-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: SubtabContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtabContactsPageRoutingModule {}
