import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab-cards/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'tab-contactos',
    loadChildren: () => import('./pages/tab-contactos/tab-contactos.module').then( m => m.TabContactosPageModule)
  },
  {
    path: 'tab-perfil',
    loadChildren: () => import('./pages/tab-perfil/tab-perfil.module').then( m => m.TabPerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
