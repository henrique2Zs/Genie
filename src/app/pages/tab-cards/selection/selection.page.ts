import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {

  constructor(private router: Router,
    private cardsService: CardsService
  ) {
    this.cardsService.numsSelection.push(2);
    this.cardsService.numsSelection.push(1);
    this.cardsService.buildCardsSellection();
  }

  ngOnInit() {}

}
