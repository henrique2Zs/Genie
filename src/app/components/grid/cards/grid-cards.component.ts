import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/class/card';
import { WishesPagePage } from 'src/app/pages/tab-perfil/wishes-page/wishes-page.page';

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
    private cardsServices: CardsService,
    private router: Router) {}

  ngOnInit() {}

  clickedCard(card: Card) {    
    this.cardsServices.selectedCard = card;    
  }

}

