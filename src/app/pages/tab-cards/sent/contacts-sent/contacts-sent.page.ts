import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { CardsService } from 'src/app/services/cards.service';
import { CardXcontactsService} from 'src/app/services/cardXcontacts.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-sent',
  templateUrl: './contacts-sent.page.html',
  styleUrls: ['./contacts-sent.page.scss'],
})
export class ContactsSentPage implements OnInit {

  collectionAnswersUsers: Map<string, User[]> = new Map<string, User[]>()
  usersLiked = () => this.collectionAnswersUsers.get("liked")
  usersNoAnswer = () => this.collectionAnswersUsers.get("")
  card= this.cardsService.selectedCard

  constructor(
    private router: Router,
    private cardsService: CardsService,
    private serviceSents: CardXcontactsService
    ) {
      this.collectionAnswersUsers = this.serviceSents.getUsersOfSelectedCard()
      }

  ngOnInit() {
  }

}
