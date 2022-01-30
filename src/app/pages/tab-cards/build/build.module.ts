import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildPageRoutingModule } from './build-routing.module';

import { BuildPage } from './build.page';

import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildPageRoutingModule
  ],
  declarations: [
    BuildPage,
    //GridCardsComponent,
    CardComponent
  ]
})
export class BuildPageModule {}
