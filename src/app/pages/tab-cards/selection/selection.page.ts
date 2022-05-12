import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  
  cardsSellection: Card[] = new Array();
  reachEnd = false
  emptySelection = true

  constructor(
    private router: Router,
    private cardsService: CardsService,
    private route: ActivatedRoute) 
    {
    this.cardsSellection = this.cardsService.getCardsSellection();
    this.emptySelection = this.cardsSellection.length==0 ? true : false
    }

  ngOnInit() {}

  pullAnothersCards() {
    //TODO: Presetn a alert that those showed will be changed
    this.cardsService.buildSelectionCardFromDB()
    this.cardsSellection = this.cardsService.getCardsSellection()
    this.reachEnd = false
    this.emptySelection = this.cardsSellection.length==0 ? true : false
  }

  openViewcard(cardClicked: Card, event: Event) {
    let eventTarget = <HTMLElement>event.target   
    if (eventTarget.tagName !== 'ION-ICON') {
      this.cardsService.selectedCard = cardClicked;
      this.router.navigate(['tabs/subtab-cards/selection/viewCardPage']);
    }
  }

  reachedEnd(bool: boolean) {
    this.reachEnd = true
  }
}
