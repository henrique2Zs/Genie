import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';
import { IonList} from '@ionic/angular';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.page.html',
  styleUrls: ['./contacts-page.page.scss'],
})
export class ContactsPage implements OnInit {
 

  constructor() { }

  ngOnInit() { }

  addContact() { }

  removeContact() { }
}
