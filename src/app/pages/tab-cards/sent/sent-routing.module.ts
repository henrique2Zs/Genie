import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';


import { SentPage } from './sent.page';

const routes: Routes = [
  {
    path: '',
    component: SentPage,
    children: [
      {
        path: 'CardComponent',
        component: CardComponent,
      },
      {
        path: 'contacts-sent',
        loadChildren: () => import('./contacts-sent/contacts-sent.module').then( m => m.ContactsSentPageModule)
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentPageRoutingModule { }
