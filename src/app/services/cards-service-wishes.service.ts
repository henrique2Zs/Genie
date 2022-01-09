import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { CardsService } from './cards.service';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceWishesService extends CardsService {
/*
  cards: Card[];
  selectedCard: Card;
*/
  constructor() {
    super()
   }

  /*
  public getCards(): Card[] {
      return super.getCards()
  }

  
  public put(card: Card): void {
      super.put(card)
  }
  */
}
