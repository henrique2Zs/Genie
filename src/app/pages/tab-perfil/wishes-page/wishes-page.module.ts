import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishesPagePageRoutingModule } from './wishes-page-routing.module';
import { WishesPagePage } from './wishes-page.page';
import { GridCardsComponent } from 'src/app/components/grid/cards/grid-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { GridCardsComponentModule } from 'src/app/components/grid/cards/grid-cards.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishesPagePageRoutingModule,
    GridCardsComponentModule
  ],
  declarations: [
    WishesPagePage,
  ]
})
export class WishesPagePageModule {}
