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
  includedByThis: User[] = new Array
  includedInAnother: User[] = new Array
  inputName = ""
  
  
  constructor(
    private router: Router,
    private contactsServs: ContactsService) { }

  ngOnInit() {
    this.buildList()
   }

  addContact() {
    this.contactsServs.setContact(this.inputName)
    this.includedByThis = this.contactsServs.getIncludedByThisArray()    
    this.inputName = ""
  }

  buildList() {
    this.contactsList = this.contactsServs.getContactsArray()
    this.includedByThis = this.contactsServs.getIncludedByThisArray()
    this.includedInAnother = this.contactsServs.getIncludedInAnotherArray()
  }

  removeContact() { //TODO
    
    //this.buildList()
   }

  viewPageContact() {
    this.router.navigateByUrl('view-contacts');
  }
}
