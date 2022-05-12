import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsSentPageRoutingModule } from './contacts-sent-routing.module';

import { ContactsSentPage } from './contacts-sent.page';
import { CardComponent } from 'src/app/components/card/card.component';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';
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
    ContactsSentPage
  ]
})
export class ContactsSentPageModule {}
