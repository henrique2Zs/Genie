import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ViewCardPageModule } from '../../view-card/view-card.module';
import { InfoPerfilComponentModule } from 'src/app/components/form/info-perfil/info-perfil.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    InfoPerfilComponentModule
  ],
  declarations: [
    ProfilePage ]
})
export class ProfilePageModule {}
