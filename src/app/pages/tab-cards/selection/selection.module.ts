import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionPageRoutingModule } from './selection-routing.module';

import { SelectionPage } from './selection.page';
import { CardComponent } from 'src/app/components/card/card.component';
import { SwiperModule } from 'swiper/angular';
import { ViewCardPageModule } from '../../view-card/view-card.module';
import { CardComponentModule } from 'src/app/components/card/card.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionPageRoutingModule,
    SwiperModule,
    CardComponentModule,
    ViewCardPageModule
  ],
  declarations: [
    SelectionPage]
})
export class SelectionPageModule {}
