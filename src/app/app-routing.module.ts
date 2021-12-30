import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoPerfilComponent } from './components/form/info-perfil/info-perfil.component';
import { ContactsComponent } from './components/list/contacts/contacts.component';
import { WishesComponent } from './components/grid/wishes/wishes.component';
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
    path: 'WishesComponent',
    component: WishesComponent
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
    loadChildren: () => import('./pages/tab-cards/view-card/view-card.module').then( m => m.ViewCardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
