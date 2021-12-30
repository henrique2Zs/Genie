import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishesPagePage } from './wishes-page.page';
import { WishesComponent } from 'src/app/components/grid/wishes/wishes.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ViewCardPageModule } from '../../tab-cards/view-card/view-card.module';

const routes: Routes = [
  {
    path: '',
    component: WishesPagePage,
    children: [
      {
      path: 'WishesComponent',
      component: WishesComponent,
      children: [
        {
        path: 'CardComponent',
        component: CardComponent,
       
        children: [
          {
          path: 'ViewCardPage',
          component: ViewCardPageModule
          }] 
        }]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishesPagePageRoutingModule {}
