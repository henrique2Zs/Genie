import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { CardsService } from 'src/app/services/cards.service';
import { CardXcontactsService} from 'src/app/services/cardXcontacts.service';

@Component({
  selector: 'cardXcontacts-page',
  templateUrl: './cardXcontacts.page.html',
  styleUrls: ['./cardXcontacts.scss'],
})
export class CardXContactsSentPage implements OnInit {
  
  card= this.cardsService.selectedCard

  constructor(
    private router: Router,
    public cardsService: CardsService,
    public serviceSents: CardXcontactsService
    ) { }

  ngOnInit() {}

}
