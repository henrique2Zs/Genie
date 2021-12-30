import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';

@Component({
  selector: 'view-card',
  templateUrl: './view-card.page.html',
  styleUrls: ['./view-card.page.scss'],
})
export class ViewCardPage implements OnInit {

  ownerCard = true;
  //card: CardComponent;
  card: Card = new Card();

  constructor(
    /*
    card?: CardComponent,
    */
    private router?: Router,
    private activatedRoute?: ActivatedRoute
    
    ) {
      
    //this.card = router.getCurrentNavigation.arguments
      //this.card = card;
   }

  ngOnInit() {
  }

}
