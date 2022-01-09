import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/class/card';
@Component({
  selector: 'grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss'],
})
export class GridCardsComponent implements OnInit {

  cardSelected: Card;

  constructor(
    private cardsServices: CardsService,
    private router: Router) {
  }

  ngOnInit() { }

  openViewcard(card: Card) {
    this.cardSelected = card;
    this.cardsServices.selectedCard = this.cardSelected;    
    this.router.navigateByUrl('view-card');
  }

}

