import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';
import { Url } from 'url';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  
  constructor () { //private cardBuild?: Card, private cardsService?: CardsService) { 
  /*  
  if (cardBuild !== this.card) {
      this.card = cardBuild;}
    else {
      this.card = new Card();
    }
    */
  }

  ngOnInit() {}

}
