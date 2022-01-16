import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewContactsPageRoutingModule } from './view-contacts-routing.module';

import { ViewContactsPage } from './view-contacts.page';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';
import { GridCardsComponent } from 'src/app/components/grid/cards/grid-cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewContactsPageRoutingModule
  ],
  declarations: [
    ViewContactsPage,
    InfoPerfilComponent,
    GridCardsComponent
  ]
})
export class ViewContactsPageModule {}
