import { Component, OnInit} from '@angular/core';
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
    this.contactsServs.putContactInthisOwnlist(this.inputName)    
    this.inputName = ""    
  }

  buildList() {
    this.contactsList = new Array    
    this.contactsList = this.contactsServs.getContactsArray()    
    this.includedByThis = this.contactsServs.getIncludedByThisArray()
    this.includedInAnother = this.contactsServs.getIncludedInAnotherArray()
  }

  rebuildList() {
    this.contactsList = new Array
    this.includedByThis = new Array
    this.includedInAnother = new Array
    this.buildList()
  }

  removeContact() { //TODO
    this.contactsServs.removeContact()  
   }

  clickedOnItem(event: Event) {   
    let eventTarget = <HTMLElement>event.target   
    // Check if the click was on trash or add icon and if not open the contact's page 
    if (eventTarget.tagName === 'ION-ICON') {
      if (eventTarget.attributes.getNamedItem('name').value.toString() === 'trash') {
      this.removeContact()
      this.buildList()
      }
      else if (eventTarget.attributes.getNamedItem('name').value.toString() === 'add-circle') {
        this.contactsList = this.contactsServs.putContactInBothList()
        this.includedInAnother = this.contactsServs.getIncludedInAnotherArray()
      }
    }
    // Check if the user is a contact to don't open a blank profile's page
    else if (this.contactsServs.getContactsMap().has(this.contactsServs.getContactSelected().nickname)) {
    this.router.navigateByUrl('view-contacts')}
  }
}