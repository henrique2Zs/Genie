import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.page.html',
  styleUrls: ['./view-contacts.page.scss'],
})
export class ViewContactsPage implements OnInit {

  user: User;

  constructor(private service: ContactsService) {
    this.user = service.contactSelected;
   }

  ngOnInit() {
  }

}
