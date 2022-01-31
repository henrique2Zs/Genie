import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikedPageRoutingModule } from './liked-routing.module';

import { LikedPage } from './liked.page';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedPageRoutingModule
  ],
  declarations: [
    LikedPage,
    CardComponent]
})
export class LikedPageModule {}
