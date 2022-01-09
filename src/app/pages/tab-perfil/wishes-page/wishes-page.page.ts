import { Component, OnInit } from '@angular/core';
import { ViewCardPage } from '../../view-card/view-card.page';

import { Router } from '@angular/router';

@Component({
  selector: 'wishes-page',
  templateUrl: './wishes-page.page.html',
  styleUrls: ['./wishes-page.page.scss'],
})
export class WishesPagePage implements OnInit {

  viewPage: ViewCardPage;
  //wishesGrid= new WishesComponent(this.router: Router);
  //cards: CardComponent[] = [new CardComponent];
 

  constructor(private router: Router) { 
   // this.wishesGrid.cards.unshift(new CardComponent);
  }

  ngOnInit() {
  }

}
