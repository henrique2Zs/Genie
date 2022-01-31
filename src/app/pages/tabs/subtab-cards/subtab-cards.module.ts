import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtabCardsPageRoutingModule } from './subtab-cards-routing.module';

import { SubtabCardsPage } from './subtab-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtabCardsPageRoutingModule
  ],
  declarations: [SubtabCardsPage]
})
export class SubtabCardsPageModule {}
