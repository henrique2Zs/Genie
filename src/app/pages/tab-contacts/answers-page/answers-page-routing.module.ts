import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAnswersPage } from '../view-answers/view-answers.page';

import { AnswersPage } from './answers-page.page';

const routes: Routes = [
  {
    path: '',
    component: AnswersPage,   
  },
  {
    path: 'view-answers',
    loadChildren: () => import('../../../pages/tab-contacts/view-answers/view-answers.module').then( m => m.ViewAnswersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswersPagePageRoutingModule {}
