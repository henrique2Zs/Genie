import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { User } from 'src/app/class/user';
import { CardXcontactsService } from 'src/app/services/cardXcontacts.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-answers',
  templateUrl: './view-answers.page.html',
  styleUrls: ['./view-answers.page.scss'],
})
export class ViewAnswersPage implements OnInit {
  
  user: User;
  mapCardsXanswers: Map<string, Card[]>
  cardsLiked: Card[] = new Array  
  cardsNoanswer: Card[] = new Array

  constructor(
    private service: ContactsService,
    private servsCardXContacts: CardXcontactsService) 
  {
   this.user = service.contactSelected;
   this.mapCardsXanswers = servsCardXContacts.getCardsAnswerOfSelected()
   this.makeCardsArray()
  }

  ngOnInit() {
  }

  makeCardsArray() {
    this.cardsLiked = this.mapCardsXanswers.get("liked")
    this.cardsNoanswer = this.mapCardsXanswers.get("")
  }

}
