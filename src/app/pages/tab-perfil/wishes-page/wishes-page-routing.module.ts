import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishesPagePage } from './wishes-page.page';

const routes: Routes = [
  {
    path: '',
    component: WishesPagePage,           
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
export class WishesPagePageRoutingModule {}
