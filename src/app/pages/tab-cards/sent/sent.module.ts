import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentPageRoutingModule } from './sent-routing.module';

import { SentPage } from './sent.page';

import { GridCardsComponentModule } from 'src/app/components/grid/cards/grid-cards.module';
import { CardComponentModule } from 'src/app/components/card/card.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentPageRoutingModule,
    GridCardsComponentModule,
    CardComponentModule
  ],
  declarations: [
    SentPage,
  ]
})
export class SentPageModule {}
