import { Component, Input, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { User } from 'src/app/class/user';
import { CardsService } from 'src/app/services/cards.service';
import { CardXcontactsService } from 'src/app/services/cardXcontacts.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { BuildPage } from '../tab-cards/build/build.page';

@Component({
  selector: 'view-card',
  templateUrl: './view-card.page.html',
  styleUrls: ['./view-card.page.scss'],
})
export class ViewCardPage implements OnInit {

  ownerCard = true;
  creating = false;
  card: Card;
  openContactList = false
  contactsMap = new Map<string, User>();
  contactsList: User[] = new Array  

  constructor(
    private cardsService: CardsService,
    private contactService: ContactsService,
    private cardXcontactService: CardXcontactsService,
    private router?: Router,
    private route?: ActivatedRoute,
   
  ) {
    this.contactsMap = this.contactService.getContactsMap() 
    }

  ngOnInit() { 
    this.card = this.cardsService.selectedCard;
    // User's list to select to send this card 
    for (let user of this.contactsMap) {
      this.contactsList.push(user[1])
    }    
  }

  sendAcard() {    
    let radios = document.getElementsByClassName("selectionContact")
    var contacts2send: User[] = new Array
    for (let index=0; index < radios.length; index++) {
      let radio = (radios.item(index))
      if ((radio.getAttribute("aria-checked")) === "true")  {
        let nickname = radio.getAttribute("ng-reflect-name")        
        contacts2send.push(this.contactService.getContact(nickname))
      }}
      this.cardXcontactService.sendAcard(this.card.id, contacts2send)    
  }

  cloneCard() {
    this.card = Card.clone(this.card)
    this.creating = true
  }

  createCard() {
    this.creating = false
    this.cardsService.put(this.card)
    this.cardsService.addProductDB(this.card)
    this.router.navigate(['..'], {relativeTo: this.route})
    
  }

}
