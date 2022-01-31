import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ContactsComponent } from './contacts.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
  ],
  declarations: [
    ContactsComponent
  ],
  exports: [ContactsComponent]
})
export class ContactsComponentModule {}
