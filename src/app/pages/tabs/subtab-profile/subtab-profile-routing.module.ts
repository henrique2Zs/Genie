import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtabProfilePage } from './subtab-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SubtabProfilePage,
    children: [
      {
        path: 'wishespage',
        loadChildren: () => import('../../tab-perfil/wishes-page/wishes-page.module')
          .then(m => m.WishesPagePageModule)
      },
      {
        path: 'profilepage',
        loadChildren: () => import('../../tab-perfil/profile/perfil.module')
          .then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'wishespage',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtabProfilePageRoutingModule { }
