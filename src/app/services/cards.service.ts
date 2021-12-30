import { Injectable } from '@angular/core';
import { Card } from '../class/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[];

  constructor() {
    this.cards = [
      new Card(
        1,
        "www.bing.com",
        "./app/card/Captura.png",
        "Card 1",
        "test 1",
        1,
        "es"
      ),
      new Card(      
        2,
        "www.bing2",
        "./app/card/Captura.png",
        "Card 2",
        "test 2",
        2,
        "es"
      )
    ]
  }

  public getCards(): Card[] {
    return this.cards;
  }
}

/*
id: 1,
        link: "www.bing.com",
        src: "./app/card/Captura.png",
        title: "Card 1",
        description: "test 1",
        authorId: 1,
        lang: "es"

id: 2,
        link: "www.bing2",
        src: "./app/card/Captura.png",
        title: "Card 2",
        description: "test 2",
        authorId: 2,
        lang: "es"        
*/