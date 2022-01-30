import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/class/card';


@Component({
  selector: 'grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class GridCardsComponent implements OnInit {

  @Input() collectionCards: Card[];

  constructor(
    private cardsServices: CardsService) {}

  ngOnInit() {}

  clickedCard(card: Card) {    
    this.cardsServices.selectedCard = card;    
  }

}

