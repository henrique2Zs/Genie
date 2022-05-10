import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionPage } from './selection.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionPage
  },
  {
    path: 'viewCardPage',
    loadChildren: () => import('../../../pages/view-card/view-card.module').then(m => m.ViewCardPageModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionPageRoutingModule {}
