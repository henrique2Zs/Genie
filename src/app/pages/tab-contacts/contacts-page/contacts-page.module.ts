import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-page-routing.module';

import { ContactsPage } from './contacts-page.page';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';
import { ContactsComponentModule } from 'src/app/components/list/contacts/contacts.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,   
    ContactsComponentModule
  ],
  declarations:  [
    ContactsPage ]
})
export class ContactsPageModule {}

