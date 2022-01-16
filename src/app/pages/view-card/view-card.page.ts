import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'view-card',
  templateUrl: './view-card.page.html',
  styleUrls: ['./view-card.page.scss'],
})
export class ViewCardPage implements OnInit {

  ownerCard = true;
  card: Card = new Card();

  constructor(
    private cardsService: CardsService,
    private router?: Router,
    private activatedRoute?: ActivatedRoute,
  ) { }

  ngOnInit() { 
    this.card = this.cardsService.selectedCard;
  }

}
