import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtabCardsPage } from './subtab-cards.page';

const routes: Routes = [
  {
    path: '',
    component: SubtabCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtabCardsPageRoutingModule {}
