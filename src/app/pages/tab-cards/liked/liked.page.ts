import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {

  constructor(
    private router: Router,
    private cardsService: CardsService
  ) {
    this.cardsService.numsLiked.push(2);
    this.cardsService.numsLiked.push(1);
    this.cardsService.buildCardsLiked();
  }

  ngOnInit() {}

  openViewcard(cardClicked: Card) {
    this.cardsService.selectedCard = cardClicked;
    this.router.navigateByUrl('view-card');
  }
}
