import { Injectable } from '@angular/core';
import { Card } from '../class/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Map<number, Card> = new Map<number, Card>();
  selectedCard: Card;

  numsBuilt: number[] = new Array<number>();
  numsSent: number[] = new Array<number>();
  numsLiked: number[] = new Array<number>();
  numsSelection: number[] = new Array<number>();
  numsWished: number[] = new Array<number>();

  collectionBuilt: Card[] = new Array<Card>();
  collectionSent: Card[] = new Array<Card>();
  collectionLiked: Card[] = new Array<Card>();
  collectionSellection: Card[] = new Array<Card>();
  collectionWished: Card[] = new Array<Card>();

  constructor() {
    this.cards.set(1,
      new Card(
        1,
        "www.boom.com",
        "/app/components/card/Captura.png",
        "Card 1",
        "test 1",
        1,
        "es"
      ));
      this.cards.set(2,
        new Card(
          2,
          "www.bing2",
          "./app/card/Captura.png",
          "Card 2",
          "test 2",
          2,
          "es"
        ));            
   }

  public getCards(): Map<number, Card> {
    return this.cards;
  }

  getAcard(num: number): Card {
    return this.cards.get(num)
  }

  public put(card: Card): void {
    this.cards.set(card.id, card);    
    this.numsBuilt.push(card.id)
    this.buildCardsBuilt()
    //push card into db
    //pull cards from db
  }

  public buildCardsBuilt(){
    this.buildCards(this.numsBuilt, this.collectionBuilt);
  }
  public buildCardsSent() {    
    this.buildCards(this.numsSent, this.collectionSent);    
  }
  public buildCardsLiked(){
    this.buildCards(this.numsLiked, this.collectionLiked);
  }
  public buildCardsSellection(){
    this.buildCards(this.numsSelection, this.collectionSellection);
  }
  public buildCardsWished(){
    this.buildCards(this.numsWished, this.collectionWished);
  }

  /*
  * Refresh arrays of cards from arrays of number cards inside this service
  */
  private buildCards(cardsnum: number[], collection: Card[]): void {        
    let card: Card
    for (let num of cardsnum) {   
      card = this.cards.get(num)
      if (!collection.includes(card))
        collection.push(this.cards.get(num));      
    }
  }

  ngOnInit() {}

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