import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsSentPageRoutingModule } from './cardXcontacts-routing.module';

import { CardXContactsSentPage } from './cardXcontacts.page';
import { CardComponentModule } from 'src/app/components/card/card.component.module';
import { ContactsComponentModule } from 'src/app/components/list/contacts/contacts.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsSentPageRoutingModule,
    CardComponentModule,
    ContactsComponentModule
  ],
  declarations: [
    CardXContactsSentPage
  ]
})
export class CardXContactsSentPageModule {}
