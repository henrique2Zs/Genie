import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCardPageRoutingModule } from './view-card-routing.module';

import { ViewCardPage } from './view-card.page';
import { CardComponent } from 'src/app/components/card/card.component';

import { ContentUneditableDirective } from 'src/app/directives/content-uneditable.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCardPageRoutingModule
  ],
  declarations: [
    ViewCardPage,
    CardComponent
    
  ]
})
export class ViewCardPageModule {}
