import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtabProfilePageRoutingModule } from './subtab-profile-routing.module';

import { SubtabProfilePage } from './subtab-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtabProfilePageRoutingModule
  ],
  declarations: [SubtabProfilePage]
})
export class SubtabProfilePageModule {}
