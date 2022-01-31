import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAnswersPage } from '../view-answers/view-answers.page';

import { AnswersPage } from './answers-page.page';

const routes: Routes = [
  {
    path: '',
    component: AnswersPage,
    children: [
      {
        path: 'view-answers',
        component: ViewAnswersPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswersPagePageRoutingModule {}
