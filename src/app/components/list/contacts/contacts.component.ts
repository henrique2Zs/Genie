import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  @Input() collectionUsers: User[];
  statusSelection:'true';
  contactSelected = (user: User) => this.contactsService.contactSelected=user;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {}

  showSelection() {
    this.contactsService.contactsMap.values
  }

}
