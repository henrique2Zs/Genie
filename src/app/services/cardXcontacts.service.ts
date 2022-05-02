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
      this.sendAcard(3, users)
  }

  private builNumbersCardMap() {
    // New map from ContactsService of each number card and a contacts's list that received them
    this.sentNumCardXcontacts.clear()
    let map = this.contactsService.contactsMap;
    for (let index of map) {
      let usr = index[1];
      // Iterate for each number card in the individual map of answers' of a user
      for (let num of usr.cardsReceivedAnswers) {
        let answersUsers: Map<string, User[]> = new Map<string, User[]>(); //Start of <answers, User[]>
        let users: User[] = new Array
        let answerOfUsr = usr.cardsReceivedAnswers.get(num[0])
        if (this.sentNumCardXcontacts.has(num[0])) { // Check if there is the number's card in principal map
          answersUsers = this.sentNumCardXcontacts.get(num[0]);          
          users = answersUsers.get(answerOfUsr); // Take the array of users to refresh on next step
        }
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
    // Include on self local data of a contact a answer empty if doesn't there one
    for (let user of contacts) {
      if (!user.cardsReceivedAnswers.has(numcard))
        user.cardsReceivedAnswers.set(numcard, "")
    }
    // Refresh those numbers of cards sent to anyone to print in Sent page
    if (!this.cardsService.numsSent.includes(numcard)) {      
      this.cardsService.numsSent.push(numcard)
    }
    this.cardsService.getCardsSent()
  }

  getCardsAnswerOfSelected(): Map<string, Card[]> {
    let user = this.contactsService.contactSelected
    let mapAnswers = user.cardsReceivedAnswers //<numberCard, stringAnswer>
    let mapCardsXanswers = new Map<string, Card[]>()
    for (let ans of mapAnswers) {
      let answer = mapAnswers.get(ans[0])
      let cards: Card[] = new Array
      if (mapCardsXanswers.has(answer)) {
        cards = mapCardsXanswers.get(answer)
      }
      cards.push(this.cardsService.getAcard(ans[0]))
      mapCardsXanswers.set(answer, cards)
    }
    return mapCardsXanswers
  }
}
