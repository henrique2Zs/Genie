import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { CardsService } from './cards.service';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root'
})
export class cardXcontactsService {
  
  sentNumCardXcontacts: Map<number, string[]> = new Map<number, string[]>();
  sentCardXContacts: Map<Card, string[]> = new Map<Card, string[]>();

  constructor(
    private contactsService: ContactsService,
    private cardsService: CardsService
  ) { }

  private builNumbersCardMap() {
    // New map of each number card and a contacts's list that received them
    let map = this.contactsService.contactsMap;
    for (let index of map) {
      let usr = index[1];
      for (let num of usr.cardsWishes) {
        var names: string[];
        if (this.sentNumCardXcontacts.has(num)) {
          names = this.sentNumCardXcontacts.get(num);
          names.push(usr.fullname);
          this.sentNumCardXcontacts.set(num, names);
        }
        else {
          this.sentNumCardXcontacts.set(num, names.push[usr.fullname]);
        }
      }
    }
  }

  getCardXUsers(): Map<Card, string[]> {
    this.builNumbersCardMap();
    for (let item of this.sentNumCardXcontacts) {
      this.sentCardXContacts.set(this.cardsService.cards.get(item[0]), item[1]);
    }    
    return this.sentCardXContacts;
  }
}
