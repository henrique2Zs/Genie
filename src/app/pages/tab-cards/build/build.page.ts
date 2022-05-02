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

  cardNew: Card = new Card(0, 'www. .com', './add-circle.svg', 'NEW CARD', '', 0, '');
  collectionBuilt: Card[] = new Array

  constructor(
    private router: Router,
    private cardsService: CardsService
  ) {    
    this.collectionBuilt.push(this.cardNew)
    this.collectionBuilt = this.collectionBuilt.concat(this.cardsService.getCardsBuilt())   
    //console.log(this.router) 
    //this.router.onSameUrlNavigation = "reload"
    //this.router.routeReuseStrategy.shouldReuseRoute(this.router.routerState.snapshot.root.firstChild, this.router.routerState.snapshot.root)
  }

  ngOnInit() { }

  openViewcard(event: Event) {
    let eventTarget = <HTMLElement>event.target   
    if (eventTarget.tagName !== 'ION-ICON') {
      this.router.navigate(["view-card"])        
    }
  }
}
