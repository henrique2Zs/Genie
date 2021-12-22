import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabContactosPageRoutingModule } from './tab-contactos-routing.module';

import { TabContactosPage } from './tab-contactos.page';
import { ContactsComponent } from 'src/app/list/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabContactosPageRoutingModule,   
  ],
  declarations: [
    TabContactosPage,
    ContactsComponent
  ],
  entryComponents: [
    ContactsComponent
  ]
})
export class TabContactosPageModule {}
