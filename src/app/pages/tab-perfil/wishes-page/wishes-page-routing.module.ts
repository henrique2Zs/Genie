import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishesPagePage } from './wishes-page.page';
import { GridCardsComponent } from 'src/app/components/grid/cards/grid-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ViewCardPageModule } from '../../view-card/view-card.module';

const routes: Routes = [
  {
    path: '',
    component: WishesPagePage,
    children: [
      {
      path: 'GridCardsComponent',
      component: GridCardsComponent,
      },
        {
        path: 'CardComponent',
        component: CardComponent,
       
        children: [
          {
          path: 'ViewCardPage',
          component: ViewCardPageModule
          }] 
        }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishesPagePageRoutingModule {}
