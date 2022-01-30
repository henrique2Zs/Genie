import { Component, OnInit } from '@angular/core';
import { ViewCardPage } from '../../view-card/view-card.page';

import { Router } from '@angular/router';
import { GridCardsComponent } from 'src/app/components/grid/cards/grid-cards.component';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'wishes-page',
  templateUrl: './wishes-page.page.html',
  styleUrls: ['./wishes-page.page.scss'],
})
export class WishesPagePage implements OnInit {

  viewPage: ViewCardPage;  
  grid: GridCardsComponent = new GridCardsComponent(this.cardsService, this.router,);

  constructor(private router: Router,
    private cardsService: CardsService) {
      this.cardsService.numsWished.push(2);
      this.cardsService.buildCardsWished();
      this.grid.collectionCards =  this.cardsService.collectionWished;   
  }

  ngOnInit() {
  }

}
