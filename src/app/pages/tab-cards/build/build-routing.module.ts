import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
//import { ViewCardPageModule } from '../../view-card/view-card.module';
import { ViewCardPage } from '../../view-card/view-card.page';

import { BuildPage } from './build.page';

const routes: Routes = [
  {
    path: '',
    component: BuildPage,
  },
  {
    path: 'viewCardPage',
    loadChildren: () => import('../../../pages/view-card/view-card.module').then(m => m.ViewCardPageModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildPageRoutingModule { }
