
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() readonly = true
    
  constructor (private cardsServs: CardsService) {}

  ngOnInit() {}

  addInWishList() {    
    this.cardsServs.addInWishList(this.card.id)
  }

  quitInWishList() {    
    this.cardsServs.quitInWishList(this.card.id)    
  }

  addInLiked(){
    this.cardsServs.addInLiked(this.card.id)
  }

  quitInLiked() {
    this.cardsServs.quitInLiked(this.card.id)
  }

}
