import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtabContactsPageRoutingModule } from './subtab-contacts-routing.module';

import { SubtabContactsPage } from './subtab-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtabContactsPageRoutingModule
  ],
  declarations: [SubtabContactsPage]
})
export class SubtabContactsPageModule {}
