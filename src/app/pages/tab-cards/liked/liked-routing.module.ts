import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikedPage } from './liked.page';

const routes: Routes = [
  {
    path: '',
    component: LikedPage
  },
  {
    path: 'viewCardPage',
    loadChildren: () => import('../../../pages/view-card/view-card.module').then( m => m.ViewCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedPageRoutingModule {}
