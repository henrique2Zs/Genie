import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  
  cardsSellection: Card[] = new Array();

  constructor(private router: Router,
    private cardsService: CardsService
  ) {
    this.cardsSellection = this.cardsService.getCardsSellection();
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
