import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoPerfilComponent } from './form/info-perfil/info-perfil.component';
import { ContactsComponent } from './list/contacts/contacts.component';
import { WishesComponent } from './grid/wishes/wishes.component';

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
    path: 'wishes-page',
    loadChildren: () => import('./pages/tab-perfil/wishes-page/wishes-page.module').then( m => m.WishesPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
