import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-page-routing.module';

import { ContactsPage } from './contacts-page.page';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,   
  ],
  declarations: [
    ContactsPage,
    ContactsComponent
  ],
  entryComponents: [
    ContactsComponent
  ]
})
export class ContactsPageModule {}
