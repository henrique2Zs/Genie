import { Component, OnInit } from '@angular/core';
import { ViewCardPage } from 'src/app/pages/tab-cards/view-card/view-card.page';
import { CardComponent } from '../../card/card.component';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/class/card';
@Component({
  selector: 'wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss'],
})
export class WishesComponent implements OnInit {

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

