import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';
import { CardXcontactsService} from 'src/app/services/cardXcontacts.service';
@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
})
export class SentPage implements OnInit {

  constructor(
    private router: Router,
    private serviceSents: CardXcontactsService,
    private route: ActivatedRoute,
    public cardsService: CardsService) 
    {}
    
  ngOnInit() {
  }

  openViewcard(event: Event) {
    let eventTarget = <HTMLElement>event.target   
    if (eventTarget.tagName !== 'ION-ICON') {      
      this.router.navigate(['tabs/subtab-cards/sent/cardXcontacts']);
    }
  }
}
