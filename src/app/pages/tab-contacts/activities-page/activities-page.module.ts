import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesPagePageRoutingModule } from './activities-page-routing.module';

import { ActivitiesPagePage } from './activities-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitiesPagePageRoutingModule
  ],
  declarations: [ActivitiesPagePage]
})
export class ActivitiesPagePageModule {}
