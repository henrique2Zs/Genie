import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { User } from '../class/user';
import { CardsService } from './cards.service';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root'
})
export class CardXcontactsService {
  
  sentNumCardXcontacts: Map<number, Map<string, User[]>> = new Map<number, Map<string, User[]>>();
  sentCardXContacts: Map<Card, User[]> = new Map<Card, User[]>();
  usersCardsAnswers: Map<string, User[]> = new Map<string, User[]>()

  constructor(
    private contactsService: ContactsService,
    private cardsService: CardsService
  ) 
  {
    this.builNumbersCardMap()
    // Prueba Sent Page
      let users: User[] = new Array
      let user = this.contactsService.contactsMap.get("aa")
      users.push(user)
      this.sendAcard(1, users)
  }

  private builNumbersCardMap() {
    // New map from ContactsService of each number card and a contacts's list that received them
    this.sentNumCardXcontacts.clear()
    let map = this.contactsService.contactsMap;
    for (let index of map) {
      let usr = index[1];
      for (let num of usr.cardsSentAnswers) {
        let answersUsers: Map<string, User[]> = new Map<string, User[]>();
        let users: User[] = new Array
        let answerOfUsr = usr.cardsSentAnswers.get(num[0])
        if (this.sentNumCardXcontacts.has(num[0])) {
          answersUsers = this.sentNumCardXcontacts.get(num[0]);          
          users = answersUsers.get(answerOfUsr);
        }
          // TODO: If users include usr
          users.push(usr)
          answersUsers.set(answerOfUsr, users)
          this.sentNumCardXcontacts.set(num[0], answersUsers);
      }
    }
  }

/*
  getCardXUsers(): Map<Card, User[]> {
    this.builNumbersCardMap();
    for (let item of this.sentNumCardXcontacts) {
      this.sentCardXContacts.set(this.cardsService.cards.get(item[0]), item[1]);
    }    
    return this.sentCardXContacts;
  }
*/

  getUsersOfSelectedCard(): Map<string, User[]> {
    this.builNumbersCardMap();
    return this.sentNumCardXcontacts.get(this.cardsService.selectedCard.id)
  }

  sendAcard(numcard: number, contacts: User[]) {
    for (let user of contacts) {
      user.cardsSentAnswers.set(numcard, "")
    }
    if (!this.cardsService.numsSent.includes(numcard)) {
      this.cardsService.numsSent.push(numcard)
    }
  }
}
