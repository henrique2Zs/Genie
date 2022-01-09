import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { ViewCardPageModule } from '../../view-card/view-card.module';

import { BuildPage } from './build.page';

const routes: Routes = [
  {
    path: '',
    component: BuildPage,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildPageRoutingModule {}
