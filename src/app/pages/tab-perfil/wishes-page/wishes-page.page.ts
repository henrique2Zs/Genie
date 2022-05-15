import { Component, OnInit } from '@angular/core';
import { ViewCardPage } from '../../view-card/view-card.page';
import { Router } from '@angular/router';
import { GridCardsComponent } from 'src/app/components/grid/cards/grid-cards.component';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/class/card';

@Component({
  selector: 'wishes-page',
  templateUrl: './wishes-page.page.html',
  styleUrls: ['./wishes-page.page.scss'],
})
export class WishesPagePage implements OnInit {

  constructor(
    private router: Router,
    private cardsService: CardsService) {}

  ngOnInit() {}

  openViewcard(event: Event) {
    let eventTarget = <HTMLElement>event.target   
      if (eventTarget.tagName !== 'ION-ICON') {    
      this.router.navigate(['tabs/subtab-profile/wishespage/viewCard']);
    }
  }


}
