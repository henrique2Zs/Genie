import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtabProfilePageRoutingModule } from './subtab-profile-routing.module';

import { SubtabProfilePage } from './subtab-profile.page';

import { WishesPagePageModule } from '../../tab-perfil/wishes-page/wishes-page.module';
import { PerfilPageModule } from '../../tab-perfil/profile/perfil.module';
import { PerfilPageRoutingModule } from '../../tab-perfil/profile/perfil-routing.module';
import { WishesPagePageRoutingModule } from '../../tab-perfil/wishes-page/wishes-page-routing.module';
import { WishesPagePage } from '../../tab-perfil/wishes-page/wishes-page.page';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';
import { WishesComponent } from 'src/app/components/grid/wishes/wishes.component';
import { PerfilPage } from '../../tab-perfil/profile/perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtabProfilePageRoutingModule
  ],
  declarations: [SubtabProfilePage]
})
export class SubtabProfilePageModule {}
