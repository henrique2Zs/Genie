import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { User } from 'src/app/class/user';
import { InfoPerfilComponent } from 'src/app/components/form/info-perfil/info-perfil.component';
import { CardsService } from 'src/app/services/cards.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.page.html',
  styleUrls: ['./view-contacts.page.scss'],
})
export class ViewContactsPage implements OnInit {

  user: User;
  cards = new Array<Card>()

  constructor(
    private router: Router,
    private service: ContactsService,
    private infouser: InfoPerfilComponent,
    private serviceCards: CardsService) {
    this.user = service.contactSelected;
    this.buildUsersCardsMap()
   }

  ngOnInit() {
  }

  buildUsersCardsMap() {
    for (let num of this.user.cardsWishes) {
      this.cards.unshift(this.serviceCards.getCardOnDB(num))
    }
  }

  openViewcard(event: Event) {
    let eventTarget = <HTMLElement>event.target   
    if (eventTarget.tagName !== 'ION-ICON') {
      this.router.navigate(["tabs/subtab-contacts/list/view-contact/viewCard"])
    }
  }

}
