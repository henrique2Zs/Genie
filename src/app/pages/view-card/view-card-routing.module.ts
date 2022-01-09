import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCardPage } from './view-card.page';
import { CardComponent } from 'src/app/components/card/card.component';
const routes: Routes = [
  {
    path: '',
    component: ViewCardPage,
    children: [
      {
      path: 'CardComponent',
      component: CardComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCardPageRoutingModule {}
