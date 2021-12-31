import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts-page.page';
import { ContactsComponent } from '../../../components/list/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',    
    component: ContactsPage,
    //loadChildren: () => import('../../list/contacts/contacts.component').then(m => m.ContactsComponent),
      children: [
        {
        path: 'contactsComponent',
        component: ContactsComponent,
        }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
