import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCardPageRoutingModule } from './view-card-routing.module';
import { ViewCardPage } from './view-card.page';

import { ContactsComponentModule } from 'src/app/components/list/contacts/contacts.component.module';
import { CardComponentModule } from 'src/app/components/card/card.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCardPageRoutingModule,
    ContactsComponentModule,
    CardComponentModule
  ],
  declarations: [
    ViewCardPage   
  ]
})
export class ViewCardPageModule {}
