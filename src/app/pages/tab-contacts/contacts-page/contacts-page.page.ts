import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.page.html',
  styleUrls: ['./contacts-page.page.scss'],
})
export class ContactsPage implements OnInit {
 
  contactSelected: User;
  contactsList: User[] = new Array
  
  
  constructor(
    private router: Router,
    private contactsServs: ContactsService) { }

  ngOnInit() {
    this.buildList()
   }

  addContact() { //TODO
  }

  buildList() {
    for (let user of this.contactsServs.getContactsMap()) {
      this.contactsList.push(user[1])
    }    
  }

  removeContact() { //TODO
    
    this.buildList()
   }

  viewPageContact() {
    this.router.navigateByUrl('view-contacts');
  }
}
