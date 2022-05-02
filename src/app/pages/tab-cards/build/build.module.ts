import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildPageRoutingModule } from './build-routing.module';

import { BuildPage } from './build.page';

import { GridCardsComponentModule } from 'src/app/components/grid/cards/grid-cards.module';
import { CardComponentModule } from 'src/app/components/card/card.component.module';
import { ViewCardPageModule } from '../../view-card/view-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildPageRoutingModule,
    GridCardsComponentModule,
    CardComponentModule,
    ViewCardPageModule
  ],
  declarations: [
    BuildPage
  ]
})
export class BuildPageModule {}
