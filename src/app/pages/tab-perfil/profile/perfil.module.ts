import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPerfilPageRoutingModule
  ],
  declarations: [
    PerfilPage,
    InfoPerfilComponent
  ]
})
export class TabPerfilPageModule {}
