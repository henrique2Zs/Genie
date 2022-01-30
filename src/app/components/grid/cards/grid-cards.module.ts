import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridCardsComponent } from './grid-cards.component';
import { CardComponent } from '../../card/card.component';
import { CardComponentModule } from '../../card/card.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardComponentModule
  ],
  declarations: [GridCardsComponent],
  exports: [GridCardsComponent]
})
export class GridCardsComponentModule {}
