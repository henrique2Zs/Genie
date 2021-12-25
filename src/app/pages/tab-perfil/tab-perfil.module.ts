import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPerfilPageRoutingModule } from './tab-perfil-routing.module';

import { TabPerfilPage } from './tab-perfil.page';
import { InfoPerfilComponent } from 'src/app/form/info-perfil/info-perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPerfilPageRoutingModule
  ],
  declarations: [
    TabPerfilPage,
    InfoPerfilComponent
  ]
})
export class TabPerfilPageModule {}
