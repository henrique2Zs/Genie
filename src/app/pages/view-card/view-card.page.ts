import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/class/card';
import { User } from 'src/app/class/user';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';
import { CardsService } from 'src/app/services/cards.service';
import { CardXcontactsService } from 'src/app/services/cardXcontacts.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'view-card',
  templateUrl: './view-card.page.html',
  styleUrls: ['./view-card.page.scss'],
})
export class ViewCardPage implements OnInit {

  ownerCard = true;
  card: Card = new Card();
  openContactList = false
  contactsMap = new Map<string, User>();
  contactsList: User[] = new Array
  listAppComponent: ContactsComponent[] = new Array

  constructor(
    private cardsService: CardsService,
    private contactService: ContactsService,
    private cardXcontactService: CardXcontactsService,
    private router?: Router,
    private activatedRoute?: ActivatedRoute,
   
  ) {
    this.contactsMap = this.contactService.getContactsMap()
    }

  ngOnInit() { 
    this.card = this.cardsService.selectedCard;
    // An array from a ordered map
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

}
