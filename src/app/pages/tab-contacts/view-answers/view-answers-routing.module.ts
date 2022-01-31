import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnswersPage } from './view-answers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAnswersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnswersPageRoutingModule {}
