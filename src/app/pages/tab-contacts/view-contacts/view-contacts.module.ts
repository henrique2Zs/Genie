import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewContactsPageRoutingModule } from './view-contacts-routing.module';

import { ViewContactsPage } from './view-contacts.page';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';
import { GridCardsComponentModule } from 'src/app/components/grid/cards/grid-cards.module';
import { InfoPerfilComponentModule } from 'src/app/components/form/info-perfil/info-perfil.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewContactsPageRoutingModule,
    GridCardsComponentModule,
    InfoPerfilComponentModule
  ],
  declarations: [
    ViewContactsPage ]
})
export class ViewContactsPageModule {}
