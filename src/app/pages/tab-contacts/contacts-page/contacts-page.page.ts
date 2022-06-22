import { Component, OnInit} from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';

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
  addClicked = false

  constructor(
    private router: Router,
    public contactsServs: ContactsService,
    private infouser: InfoPerfilComponent) { }

  ngOnInit() {}

  addContact() {
    this.contactsServs.putContactInthisOwnlist(this.inputName)    
    this.inputName = ""    
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
      }
      else if (eventTarget.attributes.getNamedItem('name').value.toString() === 'add-circle') {
        this.contactsList = this.contactsServs.putContactInBothList()
        this.includedInAnother = this.contactsServs.getIncludedInAnotherArray()
      }
    }
    // Check if the user is a contact to don't open a blank profile's page
    else if (this.contactsServs.getContactsMap().has(this.contactsServs.getContactSelected().nickname)) {
    this.router.navigate(["tabs/subtab-contacts/list/view-contact"])}
  }
}