import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikedPageRoutingModule } from './liked-routing.module';

import { LikedPage } from './liked.page';
import { GridCardsComponentModule } from 'src/app/components/grid/cards/grid-cards.module';
import { CardComponentModule } from 'src/app/components/card/card.component.module';
import { ViewCardPageModule } from '../../view-card/view-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedPageRoutingModule,
    GridCardsComponentModule,
    CardComponentModule,
    ViewCardPageModule
  ],
  declarations: [
    LikedPage]
})
export class LikedPageModule {}
