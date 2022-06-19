import { SafeResourceUrl } from '@angular/platform-browser';
import { CardDB } from '../model/card';


export class Card {
  id?: number;
  link?: string = "";
  src?: string | SafeResourceUrl = "";
  title?: string = "";
  description?: string = "";
  liked?= false
  inWishList?= false
  static totalCards = 0

  constructor(id?: number, link?, src?, title?, description?) {
    this.id = id === undefined ? Card.totalCards + 1 : id;
    this.link = link;
    this.src = src;
    this.title = title;
    this.description = description;
    Card.totalCards++
  }

  static clone(card: Card): Card {
    let cardNew = new Card()
    cardNew.title = card.title
    cardNew.src = card.src
    cardNew.description = card.description
    cardNew.link = card.link
    return cardNew
  }

  toString() {
    return this.id + ', ' + this.link + ', ' + this.src  + ', ' + this.title  + ', ' +  this.description  ;
  }

}
