import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoPerfilComponent } from './components/form/info-perfil/info-perfil.component';
import { ContactsComponent } from './components/list/contacts/contacts.component';
import { GridCardsComponent } from './components/grid/cards/grid-cards.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contactsComponent',
    component: ContactsComponent
  },
  {
    path: 'InfoPerfilComponent',
    component: InfoPerfilComponent
  },
  {
    path: 'GridCardsComponent',
    component: GridCardsComponent
  },
  {
    path: 'CardComponent',
    component: CardComponent
  },
  {
    path: 'wishes-page',
    loadChildren: () => import('./pages/tab-perfil/wishes-page/wishes-page.module').then( m => m.WishesPagePageModule)
  },
  {
    path: 'view-card',
    loadChildren: () => import('./pages/view-card/view-card.module').then( m => m.ViewCardPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./pages/tab-cards/selection/selection.module').then( m => m.SelectionPageModule)
  },
  {
    path: 'build',
    loadChildren: () => import('./pages/tab-cards/build/build.module').then( m => m.BuildPageModule)
  },
  {
    path: 'sent',
    loadChildren: () => import('./pages/tab-cards/sent/sent.module').then( m => m.SentPageModule)
  },
  {
    path: 'liked',
    loadChildren: () => import('./pages/tab-cards/liked/liked.module').then( m => m.LikedPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'contacts-sent',
    loadChildren: () => import('./pages/tab-cards/sent/cardXcontacts/cardXcontacts.module').then(m => m.CardXContactsSentPageModule)
  },
  {
    path: 'answers-page',
    loadChildren: () => import('./pages/tab-contacts/answers-page/answers-page.module').then( m => m.AnswersPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
