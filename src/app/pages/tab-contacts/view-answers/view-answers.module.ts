import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnswersPageRoutingModule } from './view-answers-routing.module';

import { ViewAnswersPage } from './view-answers.page';
import { ContactsComponentModule } from 'src/app/components/list/contacts/card.component.module';
import { GridCardsComponentModule } from 'src/app/components/grid/cards/grid-cards.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnswersPageRoutingModule,
    GridCardsComponentModule
  ],
  declarations: [ViewAnswersPage]
})
export class ViewAnswersPageModule {}
