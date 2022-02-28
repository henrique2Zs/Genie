import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { User } from 'src/app/class/user';
import { CardsService } from 'src/app/services/cards.service';
import { CardXcontactsService} from 'src/app/services/cardXcontacts.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
})
export class SentPage implements OnInit {

  collectionSent: Card[] = new Array

  constructor(
    private router: Router,
    private serviceSents: CardXcontactsService,
    private serviceCards: CardsService) 
    {        
      this.serviceCards.buildCardsSent()
      this.collectionSent = this.serviceCards.collectionSent;        
    }
    
  ngOnInit() {
  }

  cardClicked() {
    this.router.navigateByUrl('contacts-sent');
  }
}
