import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.page.html',
  styleUrls: ['./build.page.scss'],
})
export class BuildPage implements OnInit {

  cardNew: Card = new Card(0, 'www. .com', './add-circle.svg', 'NEW CARD','',0,'');
  cardNeweditable: Card = new Card();

  constructor(
    private router: Router,    
    private cardsService: CardsService
    ) {
      this.cardsService.numsBuilt.push(2);
      this.cardsService.numsBuilt.push(1);      
      this.cardsService.buildCardsBuilt();
     }

  ngOnInit() {}

  openViewcard(cardClicked: Card) {
    this.cardsService.selectedCard = cardClicked;        
    this.router.navigateByUrl('view-card');
  }

  openNewViewcard() {
    this.cardsService.selectedCard = this.cardNeweditable;    
    this.router.navigateByUrl('view-card');
  }
}
