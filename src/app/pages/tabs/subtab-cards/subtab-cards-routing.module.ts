import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtabCardsPage } from './subtab-cards.page';

const routes: Routes = [
  {
    path: '',
    component: SubtabCardsPage,
      children: [
        {
          path: 'selection',
          loadChildren: () => import('../../tab-cards/selection/selection.module')
          .then(m => m.SelectionPageModule)
        },
        {
          path: 'build',
          loadChildren: () => import('../../tab-cards/build/build.module')
          .then(m => m.BuildPageModule)
        },
        {
          path: 'sent',
          loadChildren: () => import('../../tab-cards/sent/sent.module')
          .then(m => m.SentPageModule)
        },
        {
          path: 'liked',
          loadChildren: () => import('../../tab-cards/liked/liked.module')
          .then(m => m.LikedPageModule)
        },
        {
          path: '',
          redirectTo: 'selection',
          pathMatch: 'full'
        } 
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtabCardsPageRoutingModule {}
