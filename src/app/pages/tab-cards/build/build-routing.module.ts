import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { ViewCardPageModule } from '../../view-card/view-card.module';
import { ViewCardPage } from '../../view-card/view-card.page';

import { BuildPage } from './build.page';

const routes: Routes = [
  {
    path: '',
    component: BuildPage,
     // children: [
       // {
       // path: 'CardComponent',
       // component: CardComponent,
          
        children: [
          {
          path: 'ViewCardPage',
          component: ViewCardPage
          }]
  //      }] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildPageRoutingModule {}
