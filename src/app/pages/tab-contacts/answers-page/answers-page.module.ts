import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnswersPagePageRoutingModule } from './answers-page-routing.module';

import { AnswersPage } from './answers-page.page';
import { ContactsComponentModule } from 'src/app/components/list/contacts/contacts.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswersPagePageRoutingModule,
    ContactsComponentModule
  ],
  declarations: [AnswersPage]
})
export class AnswersPagePageModule {}
