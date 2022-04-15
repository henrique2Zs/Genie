import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Card {
    id: number = 0;
    link?: string = ""; 
    src?: string = "";
    title: string = "";
    description?: string = "";
    authorId: number = 0;
    lang: string = "";
    static totalCards = 0
   
    constructor(id?, link?,src?, title?,description?,authorId?,lang?) {
        this.id = Card.totalCards + 1;
        this.link = link;
        this.src = src;
        this.title = title;
        this.description = description;
        this.authorId = authorId;        
        this.lang = lang;
        Card.totalCards++        
    }

    clone(): Card {
      let cardNew = new Card()            
      cardNew.title = this.title
      cardNew.src = this.src
      cardNew.description = this.description
      cardNew.link = this.link      
      return cardNew
    }
}
