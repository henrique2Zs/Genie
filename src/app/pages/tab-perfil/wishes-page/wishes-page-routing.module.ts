import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishesPagePage } from './wishes-page.page';
import { WishesComponent } from 'src/app/grid/wishes/wishes.component';

const routes: Routes = [
  {
    path: '',
    component: WishesPagePage,
    children: [
      {
      path: 'WishesComponent',
      component: WishesComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishesPagePageRoutingModule {}
