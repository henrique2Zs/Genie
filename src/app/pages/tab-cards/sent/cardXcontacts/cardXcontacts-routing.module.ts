import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardXContactsSentPage } from './cardXcontacts.page';

const routes: Routes = [
  {
    path: '',
    component: CardXContactsSentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsSentPageRoutingModule {}
