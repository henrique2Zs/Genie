import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { WishesComponent } from 'src/app/components/grid/wishes/wishes.component';

@Component({
  selector: 'view-card',
  templateUrl: './view-card.page.html',
  styleUrls: ['./view-card.page.scss'],
})
export class ViewCardPage implements OnInit {

  ownerCard = true;
  //card: CardComponent;
  //@Input() card: Card;
  card  : Card = new Card();
  
  constructor(

    private whishescomp: WishesComponent,
    //cardBuilder?: Card,
    private router?: Router,
    private activatedRoute?: ActivatedRoute,
    
    
    ) {
     // this.card = this.whishescomp.cardSelected; 
    //this.card = router.getCurrentNavigation.arguments
      //this.card = cardBuilder;
   }

  ngOnInit() {
   this.card = this.whishescomp.cardSelected
  }

}
