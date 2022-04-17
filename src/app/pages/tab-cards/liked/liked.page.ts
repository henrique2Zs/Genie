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
  
  collectionLiked: Card[] = new Array();

  constructor(
    private router: Router,
    private cardsService: CardsService
  ) {    
    this.collectionLiked = this.cardsService.getCardsLiked();
  }

  ngOnInit() {}

  openViewcard(cardClicked: Card, event: Event) {
    let eventTarget = <HTMLElement>event.target   
    if (eventTarget.tagName !== 'ION-ICON') {
    this.cardsService.selectedCard = cardClicked;
    this.router.navigateByUrl('view-card');
    }
  }
}
