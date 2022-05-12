import { Component, OnInit } from '@angular/core';
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
    private service: ContactsService,
    private infouser: InfoPerfilComponent,
    private serviceCards: CardsService) {
    this.user = service.contactSelected;
    //TODO: Servicio para montar coleccion
    this.cards.push(this.serviceCards.getAcard(1))

   }

  ngOnInit() {
  }

}
