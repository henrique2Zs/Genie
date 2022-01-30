import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';
import { IonList} from '@ionic/angular';
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
  
  constructor(
    private router: Router,
    private contactsService: ContactsService) { }

  ngOnInit() { }

  addContact() { //TODO
  }

  removeContact() { //TODO
   }

  viewPageContact() {
    this.router.navigateByUrl('view-contacts');
    console.log(this.contactsService.contactSelected.fullname)
  }
}
