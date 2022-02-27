import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCardPageRoutingModule } from './view-card-routing.module';

import { ViewCardPage } from './view-card.page';
import { CardComponent } from 'src/app/components/card/card.component';

import { ContentUneditableDirective } from 'src/app/directives/content-uneditable.directive';
import { ContactsComponentModule } from 'src/app/components/list/contacts/card.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCardPageRoutingModule,
    ContactsComponentModule
  ],
  declarations: [
    ViewCardPage,
    CardComponent
    
  ]
})
export class ViewCardPageModule {}
